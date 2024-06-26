"use client";

import { VENDOR_ABBREVIATION, VERSION } from "@/app/constants/Apptext";
import { ROUTES } from "@/app/constants/Routes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingOverlay from "../custom-components/LoadingOverlay";
import SideBarList from "../custom-components/SidebarList";

export default function Sidebar() {
  /*-- INITS --*/
  const [routes, setRoutes] = useState(ROUTES);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const index = Number(localStorage.selectedModuleId ?? 0);
    const initRouteTab = (index: number) => {
      setRoutes(updatedRoutes(index));
    };
    initRouteTab(index);
  }, []);

  const updatedRoutes = (index: number) => {
    return routes.map((route, i) =>
      i === index
        ? { ...route, isClicked: true }
        : { ...route, isClicked: false }
    );
  };

  useEffect(() => {
    // Prefetch the routes
    routes.forEach((route) => {
      router.prefetch(route.route);
    });
  }, [router, routes]);

  /*-- FUNCTIONS --*/
  const handleNavbarClick = (index: number) => {
    if (index == routes.length - 1) {
      setLoading(true);
    }
    router.push(getRoute(index));
    setRoutes(updatedRoutes(index));
    localStorage.selectedModuleId = index;
  };

  function getRoute(index: number): string {
    return routes[index].route;
  }

  return (
    <main>
      <LoadingOverlay loading={loading} />

      {/* BRAND LOGO */}
      <div className="mx-auto w-max mt-5">
        <Image
          priority
          src="/pcic_logo.png"
          alt="PCIC Logo"
          width={50}
          height={30}
          className="w-full h-auto"
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
