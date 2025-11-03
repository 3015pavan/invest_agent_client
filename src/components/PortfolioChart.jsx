import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PortfolioChart = ({ assets, ai }) => {
  const data = assets.map(a => ({ name: a.symbol, value: a.quantity * a.currentPrice }));

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Portfolio Allocation</h3>
      <PieChart width={400} height={400}>
        <Pie dataKey="value" data={data} cx={200} cy={200} outerRadius={120} label>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>

      <h3>AI Recommended Allocation</h3>
      <ul>
        {ai.map(item => (
          <li key={item.symbol}>{item.symbol}: {item.suggestedPercentage}%</li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioChart;
