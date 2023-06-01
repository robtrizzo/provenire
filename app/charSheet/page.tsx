"use client";
import { useContext } from "react";
import { ThemeContext } from "../theme-provider";
import CharacterSheet from "./CharacterSheet";

export default function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`CharSheet min-h-screen h-full flex w-full flex-col relative items-center justify-start transition-all duration-1000 ${
        theme === "light"
          ? "bg-gradient-to-bl from-gray-50 from-60%"
          : "bg-gradient-to-bl from-gray-900 from-40%"
      }`}
    >
      <CharacterSheet />
    </div>
  );
}
