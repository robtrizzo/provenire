"use client";
import { useContext } from "react";
import { ThemeContext } from "./theme-provider";
export default function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="flex w-full min-h-screen h-full flex-col relative">
      <div
        className={`absolute top-0 left-0 flex h-full w-full grow items-center justify-center bg-gradient-to-bl from-gray-900 from-40% transition-all duration-1000 ${
          theme === "light" ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="w-80 h-80">
          <img
            src="https://provenire.s3.amazonaws.com/logo_3_alpha.png"
            className={`bg-inherit top-0 left-0  rounded-2xl transition-all duration-400  w-80 h-80 object-cover ${
              theme === "light" ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>
      </div>
      <div
        className={`absolute top-0 left-0 flex h-full w-full grow items-center justify-center bg-gradient-to-bl from-gray-50 from-60% transition-all duration-1000 ${
          theme === "light" ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-80 h-80">
          <img
            src="https://provenire.s3.amazonaws.com/logo_2_alpha.png"
            className={`bg-inherit top-0 left-0  rounded-2xl transition-all duration-400  w-80 h-80 object-cover`}
          />
        </div>
      </div>
      <footer></footer>
    </div>
  );
}
