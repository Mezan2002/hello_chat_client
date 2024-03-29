import { NextUIProvider } from "@nextui-org/react";
import { Montserrat } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/SideNav";

const inter = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Hello Chat",
  description: "Generated by Hello Chat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex items-start flex-1 min-h-screen">
          <div className="w-[5%] h-screen border-r border-gray-300">
            <SideNav />
          </div>
          <div className="w-[95%] h-screen overflow-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
