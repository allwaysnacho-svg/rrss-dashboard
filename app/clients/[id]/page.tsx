'use client';

import { useParams } from 'next/navigation';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

export default function ClientPage() {

  const params = useParams();

  const data = [
    { month: 'Ene', followers: 12000 },
    { month: 'Feb', followers: 12400 },
    { month: 'Mar', followers: 12800 },
    { month: 'Abr', followers: 13500 },
    { month: 'May', followers: 14000 },
  ];

  return (
    <div style={{ padding: 40 }}>

      <h1 style={{ fontSize: 28, fontWeight: "bold" }}>
        Dashboard Cliente {params.id}
      </h1>

      <h2 style={{ marginTop: 30 }}>Instagram</h2>

      <LineChart width={700} height={300} data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="followers" stroke="#8884d8" />
      </LineChart>

    </div>
  );
}
