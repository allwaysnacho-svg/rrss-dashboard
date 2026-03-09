'use client';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { date: 'Ene', followers: 12000 },
  { date: 'Feb', followers: 12400 },
  { date: 'Mar', followers: 12800 },
];

export default function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard RRSS</h1>
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="followers" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}