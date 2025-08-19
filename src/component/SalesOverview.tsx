"use client";

import { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const chartData = [
  { month: "Jan", total: 10000000, commission: 5000000, value: 3000000 },
  { month: "Feb", total: 20000000, commission: 12000000, value: 8000000 },
  { month: "Mar", total: 30000000, commission: 18000000, value: 15000000 },
  { month: "Apr", total: 25000000, commission: 14000000, value: 10000000 },
  { month: "May", total: 35000000, commission: 20000000, value: 16000000 },
  { month: "Jun", total: 40000000, commission: 25000000, value: 18000000 },
  { month: "Jul", total: 28000000, commission: 16000000, value: 12000000 },
  { month: "Aug", total: 42000000, commission: 30000000, value: 20000000 },
  { month: "Sep", total: 50000000, commission: 35000000, value: 25000000 },
];

export default function SalesOverview() {
  const [period, setPeriod] = useState<"1 Week" | "1 Month" | "1 Year">(
    "1 Year"
  );

  return (
    <section aria-labelledby="sales-overview" className="w-full flex-1 ">
      <Card className="bg-red-500rounded-2xl border border-gray-200">
        {/* Top header */}
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between px-4">
          <div>
            <h2 id="sales-overview" className="text-xl font-semibold">
              Sales Overview
            </h2>
            <p className="text-sm text-gray-500">
              Showing overview Jan 2022 - Sep 2022
            </p>
          </div>

          <div className="flex flex-col items-end gap-3">
            <button
              type="button"
              className="rounded-full border border-gray-300 px-4 py-2 text-sm hover:bg-[#F5F5F5] transition-all ease-in-out duration-500"
            >
              View Transactions
            </button>

            {/* Period filter */}
            <div className="flex items-center gap-2">
              {(["1 Week", "1 Month", "1 Year"] as const).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPeriod(p)}
                  className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                    period === p
                      ? "bg-[#F5F5F5] text-black font-semibold"
                      : "bg-white text-[#3D3D3D]  border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Body: chart + metric cards */}
        <CardContent>
          <div className="h-[100vh] md:h-[60%] w-full flex flex-col md:flex-row gap-4">
            {/* Chart */}
            <div className="flex-1 w-full rounded-xl border border-gray-200 p-3 h- h-[50vh] md:h-[30vh]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <XAxis dataKey="month" />
                  <YAxis
                    domain={[0, 50000000]}
                    ticks={[10000000, 20000000, 30000000, 40000000, 50000000]}
                    tickFormatter={(value) => `${value / 1000000}m`}
                  />
                  <Tooltip
                    formatter={(value: number) =>
                      `₦${(value / 1000000).toFixed(1)}m`
                    }
                  />
                  <Bar dataKey="total" fill="#2563EB" radius={[4, 4, 0, 0]} />
                  <Bar
                    dataKey="commission"
                    fill="#16A34A"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar dataKey="value" fill="#EF4444" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Vertical divider with handle */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gray-200" />
              <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-white border border-gray-300" />
            </div>

            {/* Right metric tiles */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <MetricTile
                  value="₦120,000,000.00"
                  label="Total inflow"
                  change="+2.5%"
                  changeColor="text-emerald-600"
                  valueColor="text-blue-700"
                />
                <MetricTile
                  value="₦50,000,000.00"
                  label="MRR"
                  change="+5.3%"
                  changeColor="text-emerald-600"
                  valueColor="text-green-700"
                />
                <MetricTile
                  value="₦200,000,000.00"
                  label="Commission Revenue"
                  change="+0.83%"
                  changeColor="text-emerald-600"
                  valueColor="text-[#14B8A6]"
                />
                <MetricTile
                  value="₦100,000,000.00"
                  label="GMV"
                  change="-0.95%"
                  changeColor="text-red-600"
                  valueColor="text-red-600"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

/* ------- helpers ------- */
function Dot({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block h-2 w-2 rounded-full ${className}`}
      aria-hidden
    />
  );
}

function MetricTile({
  value,
  label,
  change,
  changeColor,
  valueColor,
}: {
  value: string;
  label: string;
  change: string;
  changeColor: string;
  valueColor: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 p-4">
      <p className={` lg:text-2xl font-bold ${valueColor}`}>{value}</p>
      <div className="mt-1 flex items-center justify-between">
        <span className="text-sm text-gray-500 font-medium">{label}</span>
        <span
          className={`text-md font-medium flex items-center gap-1 whitespace-nowrap ${changeColor}`}
        >
          <Dot className={changeColor.replace("text-", "bg-")} />
          {change}
        </span>
      </div>
    </div>
  );
}
