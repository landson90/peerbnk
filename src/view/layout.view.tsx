import { ReactNode } from "react";

interface ILayoutViewProps {
  children: ReactNode;
}

export function LayoutView({ children }: ILayoutViewProps) {
  return <div className="bg-gray-200 p-5 h-screen">{children}</div>;
}
