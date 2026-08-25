import type { Metadata } from "next";
import "./globals.css";
import ConditionalNav from "@/components/ConditionalNav";

export const metadata: Metadata = {
  title: "Tom Guy",
  description: "Developing Products. Building Startups. Driving Innovation. Creating Culture.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        <ConditionalNav />
        {children}
      </body>
    </html>
  );
}
