import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Flare UI Documentation",
  description: "Modern React component library",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
