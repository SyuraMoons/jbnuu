import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "From Jeonju to Home",
  description: "JBNU Indonesian exchange students farewell story.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
