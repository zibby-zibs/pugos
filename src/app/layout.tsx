import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import "98.css";
import { cookieToInitialState } from "wagmi";
import localFont from "next/font/local";
import { config } from "@/config";
import Web3ModalProvider from "@/context";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "pugOs",
  description: "A DeFi gaming platform",
};

const ms_sans = localFont({
  src: [
    {
      path: "../../public/w95fa.woff2",
      weight: "400",
      style: "normal",
    },
    // {
    //   path: "../../public/fonts/NeueMachina-Regular.otf",
    //   weight: "400",
    //   style: "normal",
    // },
    // {
    //   path: "../../public/fonts/NeueMachina-Ultrabold.otf",
    //   weight: "700",
    //   style: "normal",
    // },
  ],
  variable: "--ms_sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  return (
    <html lang="en">
      <body className={ms_sans.className}>
        <Web3ModalProvider initialState={initialState}>
          <div className="text-black">{children}</div>
          <Toaster />
        </Web3ModalProvider>
      </body>
    </html>
  );
}
