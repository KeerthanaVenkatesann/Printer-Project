import React from "react";
import CountCard from "./CountCard";
export default function CoutClients() {
  const data = [
    { end: 15, label: " Experience" },
    { end: 500, label: "Cities We Serve" },
    { end: 3000, label: "Active Hoarding" },
    { end: 2500, label: "Tolet" },
    { end: 5000, label: "Happy Clients" },
  ];

  return (
    <div className="countup-section">
      {data.map((item, index) => (
        <CountCard key={index} end={item.end} label={item.label} />
      ))}
    </div>
  );
}
