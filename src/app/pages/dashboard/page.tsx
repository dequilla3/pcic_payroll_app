"use client";

import CardStatus from "@/app/components/custom-components/CardStatus";
import { PageHeaderTitle } from "@/app/components/custom-components/PageHeaderTitle";
import { CARD_DATAS } from "@/app/constants/DashboardItems";

export default function Dashboard() {
  //@/app/constants/DashboardItems
  const cardData = CARD_DATAS;

  return (
    <main>
      <PageHeaderTitle title="Dashboard" />
      <div className="flex flex-wrap mt-5">
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
      </div>
    </main>
  );
}
