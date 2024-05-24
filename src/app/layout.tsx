"use client";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Toaster />
        {/* <div className="flex-col md:flex"> */}

        {/* </div> */}
      </body>
    </html>
  );
}
