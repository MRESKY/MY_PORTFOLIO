import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Muhammad Resky Rachmanto - Portfolio",
  description: "Chemical Engineer, Data Scientist, and Web Developer. Explore my works and projects!",
  openGraph: {
    title: "Muhammad Resky Rachmanto - Portfolio",
    description: "Chemical Engineer, Data Scientist, and Web Developer.",
    url: "https://my-portfolio-i7lg0ww4n-mreskys-projects.vercel.app/",
    siteName: "Portfolio Resky",
    images: [
      {
        url: "/images/preview.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
