import Image from "next/image";
import ButtonPrimary from "./components/ButtonPrimary";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Self-Service Portal",
  description: "Simplify Your Workday",
};

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="container mx-auto max-w-xs text-center pt-">
        <div className="mx-auto mb-3 w-max">
          <Image
            priority
            src="/pcic_logo.png"
            alt="PCIC Logo"
            width={100}
            height={50}
          />
        </div>
        <div className="text-center mb-5 font-bold">
          PCICXI Employee Self Service
        </div>
        <input
          className="border border-gray-300 px-4 py-2 w-full text-xs focus:outline-none focus:border-green-400 mb-1 rounded-md"
          type="text"
          placeholder="Username"
        />
        <input
          className="border border-gray-300 px-4 py-2 w-full text-xs focus:outline-none focus:border-green-400 mb-1 rounded-md"
          type="password"
          placeholder="Password"
        />
        <ButtonPrimary text="Login" />
      </div>
    </div>
  );
}
