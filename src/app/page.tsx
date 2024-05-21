import { Metadata } from "next";
import LoginForm from "./components/forms/login/LoginForm";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Self-Service Portal",
  description: "Simplify Your Workday",
};

export default function Home() {
  return <LoginForm />;
}
