"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface OverviewCardProps {
  title: string;
  value: string | number;
  change?: string;
}

export default function OverviewCard({
  title,
  value,
  change,
}: OverviewCardProps) {
  return (
    <Card className="rounded-2xl shadow-sm border border-gray-200 bg-white hover:bg-gray-50 transition">
      <CardHeader>
        <CardTitle className="text-sm font-medium text-gray-600">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{value}</p>
        {change && <p className="text-sm text-green-600">{change}</p>}
      </CardContent>
    </Card>
  );
}
