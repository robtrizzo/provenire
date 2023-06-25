import React from "react";
import Sidebar from "./SettingSidebar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return <Sidebar>{children}</Sidebar>;
}
