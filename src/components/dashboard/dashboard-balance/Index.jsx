import React from "react";
import "../dashboard-balance/DashboardBalance.scss";
import { CiBadgeDollar, CiCreditCard1 } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";

export default function Index() {
  const stats = [
    {
      icon: <CiBadgeDollar/>, 
      title: 'Earning',
      value: '$198k',
      change: '+37.8% this month',
      changePositive: true,
    },
    {
      icon: <CiCreditCard1/>,
      title: 'Balance',
      value: '$2.4k',
      change: '-2% this month',
      changePositive: false,
    },
    {
      icon: <FaShoppingBag />,
      title: 'Total Sales',
      value: '$89k',
      change: '+11% this week',
      changePositive: true,
    },
  ];

  return (
  <div className="w-full mb-10 rounded-3xl bg-mainGrey">
    <div className="stats-section">
      {stats.map((stat, index) => (
        <div key={index} className="stat-item">
          <div className="stat-icon">{stat.icon}</div>
          <div className="stat-details">
            <p className="stat-title">{stat.title}</p>
            <p className="stat-value">{stat.value}</p>
            <p className={`stat-change ${stat.changePositive ? 'positive' : 'negative'}`}>
              {stat.change}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

