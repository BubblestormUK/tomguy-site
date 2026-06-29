import type { Metadata } from "next";
import "./globals.css";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Tom Guy",
  description: "Developing Products. Building Startups. Driving Innovation. Creating Culture.",
  icons: {
    icon: "https://www.tomguy.co/wp-content/uploads/2025/02/cropped-TOM-GUY-FAVICON-32x32.png",
    apple: "https://www.tomguy.co/wp-content/uploads/2025/02/cropped-TOM-GUY-FAVICON-180x180.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
