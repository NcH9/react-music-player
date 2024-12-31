import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "../components/nav_panel"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Music Player",
  description: "Next.js React app with a music player",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div>
          <Navigation />
        </div>
        {children}
      </body>
    </html>
  );
}
