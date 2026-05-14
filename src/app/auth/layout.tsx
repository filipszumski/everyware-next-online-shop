import everywareLogo from "@static/everyware-logo.svg";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-dvh bg-(--color-primary-500) w-full flex justify-center items-center">
      <div className=" bg-backgroundLight p-8 rounded-lg max-w-xl w-full">
        <div className="flex justify-center ">
          <Image
            src={everywareLogo}
            className="max-w-64 mb-8"
            alt="Everyware Logo"
          />
        </div>
        {children}
      </div>
    </main>
  );
}
