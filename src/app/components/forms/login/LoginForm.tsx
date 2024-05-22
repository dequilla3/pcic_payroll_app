"use client";

import ButtonPrimary from "../../custom-components/ButtonPrimary";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { SYSTEN_TITLE, VERSION } from "@/app/constants/Apptext";
import { useEffect, useState } from "react";

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    localStorage.clear();
  });

  function handleLogin() {
    setLoading(true);
    setDisabled(true);
    router.push("/pages/dashboard");
  }

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
            className="w-full h-auto"
          />
        </div>
        <div className="text-center mb-3 font-semibold text-sm ">
          {SYSTEN_TITLE}
          <br /> ESS Portal <br />
          <sub className="text-xss">{VERSION}</sub>
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
        <ButtonPrimary
          text="Login"
          onClick={handleLogin}
          loading={loading}
          disabled={disabled}
        />
      </div>
    </div>
  );
}
