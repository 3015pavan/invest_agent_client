import React from "react";

const Alerts = ({ alerts }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Recent Alerts</h3>
      <ul>
        {alerts.map(alert => (
          <li key={alert._id}>
            {alert.message} {alert.read ? "(Read)" : "(New)"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Alerts;
