import Header from "@/components/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vinicius | Portfolio",
  description: "Vinicius é definitivamente um dos estudantes de computação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-36`}>
          <div className="bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.7rem]"></div>
          <div className="bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[35rem] h-[50rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.7rem] md:left-[-33rem] lg:left-[-28rem] x1:left-[-15rem] 2x1:left-[-5rem]"></div>
        
        <Header /> 
        {children}
      </body>
    </html>
  );
}
