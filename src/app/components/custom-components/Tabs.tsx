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
      <div className="flex text-xs shadow-sm p-3 mt-3">
        {tabs.map((val, index) => (
          <div
            key={index}
            className={`transition-all mr-3 cursor-pointer hover:bg-green-200 p-2 rounded-sm ${
              val.isClicked ? "font-semibold bg-green-200" : ""
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
            <div className="p-3" key={index}>
              <tab.content />
            </div>
          )
      )}
    </div>
  );
}
