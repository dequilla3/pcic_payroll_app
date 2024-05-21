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
      <div className="fixed top-0 bottom-0 bg-slate-50 sm:w-24 md:w-48 shadow-xl border">
        <Sidebar />
      </div>
      <main className="flex flex-grow flex-col shadow-sm">
        <div className="border p-5 fixed top-3 bottom-3 right-3 md:left-52 sm:left-28">
          {children}
        </div>
      </main>
    </section>
  );
}
