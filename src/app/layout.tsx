import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { FormProvider } from './context/FormContext';


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
});

export const metadata: Metadata = {
  title: "Change It 4 Me",
  description: "Marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto} antialiased`}>
      <head>
        <link rel="icon" href="/logo3.png" />
      </head>
      <body className={roboto.className}>{children}
        
      </body>
    </html>
  );
}

