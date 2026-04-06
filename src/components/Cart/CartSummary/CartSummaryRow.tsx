import { PropsWithChildren } from "react";

export const CartSummaryRow = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex items-center justify-between py-[0.25rem] md:py-2">
      {children}
    </div>
  );
};
