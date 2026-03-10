import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

const outfit = Syne({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uniclub - The Ultimate Student Network",
  description: "Discover every club, never miss an event. The unified platform connecting students with opportunities across colleges.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className}`}
      >
        {children}
      </body>
    </html>
  );
}
