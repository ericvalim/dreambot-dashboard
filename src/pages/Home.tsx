import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const sampleData = [
  { date: "2025-07-01", vendas: 150 },
  { date: "2025-07-02", vendas: 200 },
  { date: "2025-07-03", vendas: 250 },
  { date: "2025-07-04", vendas: 300 },
  { date: "2025-07-05", vendas: 180 },
  { date: "2025-07-06", vendas: 320 },
  { date: "2025-07-07", vendas: 400 },
];

export default function Home() {
  const [startDate, setStartDate] = useState("2025-07-01");
  const [endDate, setEndDate] = useState("2025-07-07");

  const filteredData = sampleData.filter((item) => {
    return item.date >= startDate && item.date <= endDate;
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Dashboard Geral</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-neutral-900 text-white">
          <CardContent className="p-4">
            <p className="text-sm text-neutral-400">Total de Vendas</p>
            <p className="text-2xl font-bold">$2,800.00</p>
          </CardContent>
        </Card>
        <Card className="bg-neutral-900 text-white">
          <CardContent className="p-4">
            <p className="text-sm text-neutral-400">Bots Ativos</p>
            <p className="text-2xl font-bold">38</p>
          </CardContent>
        </Card>
        <Card className="bg-neutral-900 text-white">
          <CardContent className="p-4">
            <p className="text-sm text-neutral-400">Gold Farmado</p>
            <p className="text-2xl font-bold">1.2B</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div>
          <label className="text-sm text-white">Data Início</label>
          <Input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="bg-neutral-800 text-white border-neutral-700"
          />
        </div>
        <div>
          <label className="text-sm text-white">Data Fim</label>
          <Input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="bg-neutral-800 text-white border-neutral-700"
          />
        </div>
      </div>

      <Card className="bg-neutral-900 text-white">
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold mb-4">Vendas por Data (USD)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={filteredData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="date" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip contentStyle={{ backgroundColor: '#1f2937', borderColor: '#3f3f46' }} />
              <Line type="monotone" dataKey="vendas" stroke="#f97316" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
