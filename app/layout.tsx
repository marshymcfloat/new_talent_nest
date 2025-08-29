import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AuthProvder from "@/components/Providers/AuthProvder";
import Navbar from "@/components/Navbar";
import "./globals.css";
import TanstackProvider from "@/components/Providers/TanstackProvider";
import { Toaster } from "sonner";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Talent nest",
  description: "Find jobs with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-zinc-900/95`}
      >
        <TanstackProvider>
          <AuthProvder>
            <Navbar />
            {children}
            <Toaster />
          </AuthProvder>
        </TanstackProvider>
      </body>
    </html>
  );
}
