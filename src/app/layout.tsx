import type { Metadata } from "next";
import "./globals.css";
import ConditionalNav from "@/components/ConditionalNav";

export const metadata: Metadata = {
  title: "Tom Guy",
  description: "Developing Products. Building Startups. Driving Innovation. Creating Culture.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
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
