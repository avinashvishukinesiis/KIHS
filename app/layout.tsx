import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/Components/NavBar/NavBar";
import { Footer } from "@/Components/Footer/Footer";
import MotionWrapper from "@/Components/MotionWrapper";


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
        <main className="h-max min-h-[200px] md:min-h-[500px] mt-[136px] box-border">
          <MotionWrapper>{children}</MotionWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
