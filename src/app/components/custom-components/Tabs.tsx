"use client";

import { useState } from "react";

interface MyTab {
  title: string;
  isClicked: boolean;
  content: React.ElementType; // This defines that content will be a React component type
}

interface TabsProps {
  initialTabs: MyTab[];
}

export default function Tabs({ initialTabs }: TabsProps) {
  const [tabs, setTabs] = useState(initialTabs);

  function handleNavbarClick(index: number) {
    const updatedTabs = tabs.map((tab, i) =>
      i === index ? { ...tab, isClicked: true } : { ...tab, isClicked: false }
    );
    setTabs(updatedTabs);
  }

  return (
    <div>
      <div className="flex text-xs shadow-sm  mt-3">
        {tabs.map((val, index) => (
          <div
            key={index}
            className={`mr-2 cursor-pointer hover:bg-slate-50 p-2 rounded-sm text-xs ${
              val.isClicked
                ? "font-semibold bg-slate-50 border-t border-green-500"
                : ""
            }`}
            onClick={() => handleNavbarClick(index)}
          >
            {val.title}
          </div>
        ))}
      </div>
      {tabs.map(
        (tab, index) =>
          tab.isClicked && (
            <div className="p-8 bg-slate-50 " key={index}>
              <tab.content />
            </div>
          )
      )}
    </div>
  );
}
