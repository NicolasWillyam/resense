import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer";
import Pin from "@/components/pin";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Providers } from "@/components/ui/provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resense",
  // description: "- Homepage",
  icons: {
    icon: "/resense.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SpeedInsights />
        <Providers>
          <div className="max-w-[1440px] mx-auto px-4">
            <Pin />
            <Header />
            <div className="pt-40">{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
