import { ReactNode } from "react";

interface LoadingWrapperProps {
  isLoading: boolean;
  fallback: ReactNode;
  children: ReactNode;
}
export default function LoadingWrapper({
  isLoading,
  fallback,
  children,
}: LoadingWrapperProps) {
  return isLoading ? fallback : children;
}
