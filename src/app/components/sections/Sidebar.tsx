"use client";

import SideBarList from "../custom-components/SidebarList";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InfoIcon from "@mui/icons-material/Info";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import { useState } from "react";

export default function Sidebar() {
  const [routes, setRoutes] = useState([
    { title: "Dashboard", icon: DashboardIcon, isClicked: true },
    { title: "About Me", icon: InfoIcon, isClicked: false },
    { title: "Filings", icon: PendingActionsIcon, isClicked: false },
    { title: "My Payroll Info", icon: LocalAtmIcon, isClicked: false },
  ]);
  function handleNavbarClick(index: number) {
    const updatedRoutes = routes.map((route, i) =>
      i === index
        ? { ...route, isClicked: true }
        : { ...route, isClicked: false }
    );
    setRoutes(updatedRoutes);
  }
  return (
    <main>
      {/* BRAND LOGO */}
      <div className="mt-40">
        <ul className="">
          {routes.map((route, index) => (
            <SideBarList
              key={index}
              title={route.title}
              icon={route.icon}
              isClicked={route.isClicked}
              onClick={() => handleNavbarClick(index)}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}
