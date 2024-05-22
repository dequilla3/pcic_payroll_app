"use client";

import CardStatus from "@/app/components/custom-components/CardStatus";
import { PageHeaderTitle } from "@/app/components/custom-components/PageHeaderTitle";
import { BAR_CHART_DATA, CARD_DATAS } from "@/app/constants/DashboardItems";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const barchartData = BAR_CHART_DATA;

export default function Dashboard() {
  //@/app/constants/DashboardItems
  const cardData = CARD_DATAS;
  return (
    <main>
      <PageHeaderTitle title="Dashboard" />
      <div className="flex flex-wrap justify-evenly gap-5 mt-5 transition-all">
        {cardData.map((card, index) => (
          <CardStatus
            key={index}
            title={card.title}
            bgColor={card.bgColor}
            value={card.value}
            valuePercentage={card.valuePercentage}
            icon={card.icon}
          />
        ))}
        <div className="bg-green-100 p-10 rounded-md">
          <ResponsiveContainer width={600} height={400}>
            <BarChart
              width={600}
              height={400}
              data={barchartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip shared={false} trigger="click" />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-red-100 p-10 rounded-md">
          <ResponsiveContainer width={600} height={400}>
            <BarChart
              width={600}
              height={400}
              data={barchartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip shared={false} trigger="click" />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
}
