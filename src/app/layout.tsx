import type { Metadata } from "next";
import { Montserrat, Cinzel, Playfair_Display } from "next/font/google";
import "./globals.css";
import CustomCursor from "../components/CustomCursor";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "600"],
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "VIZAG CRUISE | The Apex of Ultra-Luxury Hospitality",
  description: "Step into a world where architecture meets the horizon. Vizag Cruise is Visakhapatnam's premier 7-star destination for elite travelers, fine dining, and grand celebrations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cinzel.variable}`}>
      <body style={{ position: 'relative' }}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
