"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/Components/NavBar/NavBar";
import { Footer } from "@/Components/Footer/Footer";
import MotionWrapper from "@/Components/MotionWrapper";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // List routes where header and footer should not appear
  const noHeaderFooterRoutes = ['/studio'];
  
  // Check if current route is in the exclusion list
  const shouldShowHeaderFooter = !noHeaderFooterRoutes.some(route => 
    pathname.startsWith(route)
  );

  return (
    <>
      {shouldShowHeaderFooter && <Navbar />}
      <main className={`h-max min-h-[200px] md:min-h-[500px] ${shouldShowHeaderFooter ? 'mt-[136px]' : ''} box-border`}>
        <MotionWrapper>{children}</MotionWrapper>
      </main>
      {shouldShowHeaderFooter && <Footer />}
    </>
  );
}