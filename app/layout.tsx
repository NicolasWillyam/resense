import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer";
import Pin from "@/components/pin";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Providers } from "@/components/ui/provider";
import { usePathname } from "next/navigation";
import RootLayout from "@/components/root-layout";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resense",
  // description: "- Homepage",
  icons: {
    icon: "/resense.jpeg",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SpeedInsights />
        <Providers>
          <div className="">
            <Pin />
            <Header />
            <RootLayout children={children}/>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
