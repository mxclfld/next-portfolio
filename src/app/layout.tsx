import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import cn from "@/lib/cn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diana Kosovan",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "flex flex-col min-h-screen bg-background font-mono grainy"
        )}
      >
        <Providers>
          <Navbar />
          {children}
          <Cursor />
        </Providers>
      </body>
    </html>
  );
}
