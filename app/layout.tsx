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
  modal,
}: Readonly<{
  modal: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br to-purple-300 from-slate-100 `}
      >
        <TanstackProvider>
          <AuthProvder>
            {children}
            <Toaster />
          </AuthProvder>
        </TanstackProvider>
      </body>
    </html>
  );
}
