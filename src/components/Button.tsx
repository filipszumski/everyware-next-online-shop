import { ReactNode } from "react";

export const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg">
      {children}
    </button>
  );
};
