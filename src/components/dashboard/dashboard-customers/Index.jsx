import React from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

export default function Index() {
  // Pie chart üçün məlumatlar
  const data = [
    { name: 'Value', value: 20 },
    { name: 'Secondary', value: 40 },
    { name: 'Remaining', value: 40 }
  ];

  const COLORS = ['#FF69B4','#E0E0E0','#8A2BE2']; 

  const renderCustomizedLabel = ({ cx, cy, percent }) => {
    return (
      <g>
        <text
          x={cx}
          y={cy}
          textAnchor="middle"
          fill="#333"
          fontSize="24px"
          fontWeight="bold"
          dominantBaseline="middle"
        >
          {`${(percent * 100).toFixed(0)}%`}
        </text>
        <text
          x={cx}
          y={cy + 30}  // Aşağıya doğru məsafəni artırır
          textAnchor="middle"
          fill="#333"
          fontSize="16px"
          fontWeight="bold"
          dominantBaseline="middle"
        >
          Total New Customers
        </text>
      </g>
    );
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-4">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-center">Customers</h2>
        <p className="text-gray-700 text-center">Customers that buy products</p>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
            innerRadius={100}
            fill="#8884d8"
            labelLine={false}
            label={renderCustomizedLabel}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          {/* <Legend /> */}
        </PieChart>
      </div>
    </div>
  );
}
