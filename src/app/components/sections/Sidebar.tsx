"use client";

import SideBarList from "../custom-components/SidebarList"; 
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { VENDOR_ABBREVIATION, VERSION } from "@/app/constants/Apptext";
import { ROUTES } from "@/app/constants/Routes";

export default function Sidebar() {
  /*-- INITS --*/
  const [routes, setRoutes] = useState(ROUTES);
  const router = useRouter();

  /*-- FUNCTIONS --*/
  function handleNavbarClick(index: number) {
    const updatedRoutes = routes.map((route, i) =>
      i === index
        ? { ...route, isClicked: true }
        : { ...route, isClicked: false }
    );
    router.push(getRoute(index));

    setRoutes(updatedRoutes);
  }

  function getRoute(index: number): string {
    return routes[index].route;
  }

  return (
    <main>
      {/* BRAND LOGO */}
      <div className="mx-auto w-max mt-5">
        <Image
          priority
          src="/pcic_logo.png"
          alt="PCIC Logo"
          width={50}
          height={30}
        />
      </div>
      <div className="w-full text-center text-xss mt-2">
        {VENDOR_ABBREVIATION} PMS-ESS {VERSION}
      </div>
      <div className="mt-10">
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
