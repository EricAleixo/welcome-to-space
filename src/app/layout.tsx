import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bem vindo ao cosmo",
  description: "Aplicação em foco de astronomia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
