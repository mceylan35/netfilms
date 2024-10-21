import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/reset.css"; 
import "@/styles/global.css";
import { ReactNode } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
 
interface IState{
  children:ReactNode;
} 

export default function RootLayout({
  children
}:IState)  {
  return (
    <html lang="tr">
       <body className="container">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
