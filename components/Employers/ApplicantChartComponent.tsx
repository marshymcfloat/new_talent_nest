"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  { name: "Jan", total: Math.floor(Math.random() * 50) + 10 },
  { name: "Feb", total: Math.floor(Math.random() * 50) + 10 },
  { name: "Mar", total: Math.floor(Math.random() * 50) + 10 },
  { name: "Apr", total: Math.floor(Math.random() * 50) + 10 },
  { name: "May", total: Math.floor(Math.random() * 50) + 10 },
  { name: "Jun", total: Math.floor(Math.random() * 80) + 15 },
  { name: "Jul", total: Math.floor(Math.random() * 80) + 15 },
  { name: "Aug", total: Math.floor(Math.random() * 80) + 15 },
  { name: "Sep", total: Math.floor(Math.random() * 80) + 15 },
  { name: "Oct", total: Math.floor(Math.random() * 80) + 15 },
  { name: "Nov", total: Math.floor(Math.random() * 80) + 15 },
  { name: "Dec", total: Math.floor(Math.random() * 80) + 15 },
];

export function ApplicantChart() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Application Overview</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Bar dataKey="total" fill="#18181b" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
