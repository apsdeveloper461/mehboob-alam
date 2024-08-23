import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Alam's Potfolio - By Mehboob Alam",
  description: "My name is Mehboob Alam. I am a Full Stack Developer(MERN) with 2 years of experience & studied at University of Engineering and Technology (UET) Lahore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en">

    <body className="bg-blur bg-custom-background-200  w-screen h-full">
      {children}
      <Footer/>
    </body>
      
    </html>
    </>
  );
}
