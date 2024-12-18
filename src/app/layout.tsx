import type { Metadata } from "next";
import { Raleway } from 'next/font/google'
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/src/components/layout/header/Header";
// import Footer from "../components/layout/footer/Footer";
import HeroSection from "../components/hero/HeroSection";


const Bubblegum = localFont({
  src: "./fonts/Bubblegum.ttf",
  variable: "--font-bubblegum",
  weight: "100 900",
});

const RalewayVariable = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Bible Odyssey",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${Bubblegum.variable} ${RalewayVariable.variable} antialiased min-h-screen bg-mobileBodyBg bg-cover bg-center bg-no-repeat lg:bg-none`}
      >
        <div className="lg:bg-desktopUpperBodyBg lg:bg-cover lg:bg-center lg:bg-no-repeat">
          <Header />
          <HeroSection />
        </div>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
