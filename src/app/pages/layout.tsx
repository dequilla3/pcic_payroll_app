import { Metadata } from "next";
import Sidebar from "../components/sections/Sidebar";
import { VENDOR_ABBREVIATION } from "../constants/Apptext";

export const metadata: Metadata = {
  title: `${VENDOR_ABBREVIATION} | PMS-ESS`,
  description: "Simplify Your Workday",
};

export default function CustomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex">
      <div className="h-screen bg-slate-50 sm:w-24 md:w-44 shadow-xl border fixed">
        {/* Parent div with relative positioning */}
        <Sidebar />
      </div>
      <main className="flex flex-grow flex-col md:ml-44 sm:ml-24">
        <div className="p-5  md:left-52 sm:left-28">{children}</div>
      </main>
    </section>
  );
}
