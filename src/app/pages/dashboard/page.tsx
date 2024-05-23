"use client";

import CardStatus from "@/app/components/custom-components/CardStatus";
import LoadingOverlay from "@/app/components/custom-components/LoadingOverlay";
import { PageHeaderTitle } from "@/app/components/custom-components/PageHeaderTitle";
import { CARD_DATAS } from "@/app/constants/DashboardItems";
import { useEffect, useState } from "react";

export default function Dashboard() {
  //@/app/constants/DashboardItems
  const cardData = CARD_DATAS;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <main>
      <LoadingOverlay loading={loading} />
      <PageHeaderTitle title="Dashboard" />
      <div className="flex flex-wrap justify-evenly gap-5 mt-5 transition-all z-0">
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
