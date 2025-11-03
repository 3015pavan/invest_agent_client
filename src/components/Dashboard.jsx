import React, { useEffect, useState } from "react";
import API from "../api/api";
import socket from "../api/socket";
import PortfolioChart from "./PortfolioChart";
import Alerts from "./Alerts";

const Dashboard = () => {
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await API.get("/dashboard");
        setDashboard(res.data);

        // ✅ Connect socket after data fetched
        socket.auth = { userId: res.data.user._id };
        socket.connect();

        socket.on("connect", () => {
          console.log("⚡ Connected to backend:", socket.id);
        });

        socket.on("portfolioUpdate", (updatedPortfolio) => {
          console.log("📈 Live update received:", updatedPortfolio);
          setDashboard((prev) => ({ ...prev, portfolio: updatedPortfolio }));
        });

        socket.on("disconnect", () => {
          console.log("❌ Disconnected from backend");
        });
      } catch (err) {
        console.error("Error loading dashboard:", err.message);
      }
    };

    fetchDashboard();

    // Cleanup socket on unmount
    return () => {
      socket.off("portfolioUpdate");
      socket.disconnect();
    };
  }, []);

  if (!dashboard) return <div>Loading...</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome, {dashboard.user.name}</h1>
      <h2>Total Portfolio Value: ${dashboard.portfolio.totalValue.toFixed(2)}</h2>
      <PortfolioChart assets={dashboard.portfolio.assets} ai={dashboard.aiRecommendation} />
      <Alerts alerts={dashboard.alerts} />
    </div>
  );
};

export default Dashboard;
