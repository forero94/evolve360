import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evolvere 360",
  description: "Carne Premium a Domicilio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${outfit.className} antialiased min-h-screen bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
