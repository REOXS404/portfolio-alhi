import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // <--- 1. Import ini
import Cursor from "@/components/Cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alhi | Full Stack Developer",
  description: "Portfolio of Alhi, a Full Stack Developer and 3D Enthusiast based in Bogor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Cursor />
        <Navbar />  {/* <--- 2. Pasang di sini, SEBELUM children */}
        {children}
      </body>
    </html>
  );
}