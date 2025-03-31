import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/Components/NavBar/NavBar";
import { Footer } from "@/Components/Footer/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "KIHS",
  description: "Kullolli Institute of Health Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en">
      <body className={`${poppins.className} scrollbar-hide`}>
        <Navbar />
        <main className="h-max mt-[136px] box-border">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
