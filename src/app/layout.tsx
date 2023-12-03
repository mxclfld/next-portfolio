import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import cn from "@/lib/cn";

const roboto = Roboto_Mono({ subsets: ["latin"] });

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
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body
        className={cn(
          "flex flex-col min-h-screen bg-background grainy",
          roboto.className
        )}
      >
        <Providers>
          <Navbar />
          {children}
          {/* <Cursor /> */}
        </Providers>
      </body>
    </html>
  );
}
