import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import Provider from "@/components/provider";
import { constructMetadata } from "@/lib/utils";

const font = Recursive({ subsets: ["latin"] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px)] grainy-light">
          <div className="flex flex-1 flex-col h-full">
            <Provider>{children}</Provider>
          </div>
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
