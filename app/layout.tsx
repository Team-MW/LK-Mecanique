import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "LK Mécanique — Garage automobile, entretien et réparation",
  description:
    "LK Mécanique, garage mécanique toutes marques au 8 Rue Romain Rolland : entretien, vidange, freinage, pneus, diagnostic et réparation. Devis gratuit.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={archivo.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
