import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Formstone Labs",
  description: "A small software studio based in Connecticut.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#F5F3EE] text-[#2C2C2C] antialiased" style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
