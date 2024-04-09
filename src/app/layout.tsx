import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Top from "./components/header";

export const runtime = 'edge';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learning English with artificial intelligence",
  description: "Platform for learning English with the help of artificial intelligence",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className+" bg-slate-100"}>
		<Top></Top>
		<div>{children}</div></body>
    </html>
  );
}
