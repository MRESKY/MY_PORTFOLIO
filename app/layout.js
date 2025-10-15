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
  title: "Muhammad Resky Rachmanto | Chemical Engineer & Developer",
  description:
    "Official portfolio of Muhammad Resky Rachmanto — Chemical Engineer, Python Enthusiast, Data Scientist, and Fullstack Developer. Explore my projects, publications, and achievements.",
  keywords: [
    "Muhammad Resky Rachmanto",
    "Resky Rachmanto",
    "Chemical Engineer",
    "Python Developer",
    "Data Scientist",
    "Fullstack Developer",
    "Portfolio"
  ],
  authors: [{ name: "Muhammad Resky Rachmanto" }],
  openGraph: {
    title: "Muhammad Resky Rachmanto | Engineer & Developer",
    description:
      "Explore my portfolio as a Chemical Engineer and Developer. View my work in Data Science, AI, and Robotics.",
    url: "https://my-portfolio-mreskys-projects.vercel.app/",
    siteName: "Muhammad Resky Rachmanto Portfolio",
    images: [
      {
        url: "https://my-portfolio-mreskys-projects.vercel.app/logo.png",
        width: 800,
        height: 600,
        alt: "Muhammad Resky Rachmanto Portfolio Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://my-portfolio-mreskys-projects.vercel.app"),
  alternates: {
    canonical: "https://my-portfolio-mreskys-projects.vercel.app/",
  },
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: "/logo.png", // pastikan file ini ada di folder /public
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Tag tambahan untuk SEO */}
        <meta name="author" content="Muhammad Resky Rachmanto" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://my-portfolio-mreskys-projects.vercel.app/"
        />

        {/* Schema markup untuk membantu Google mengenali identitasmu */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammad Resky Rachmanto",
              url: "https://my-portfolio-mreskys-projects.vercel.app/",
              jobTitle: "Chemical Engineer & Developer",
              sameAs: [
                "https://github.com/mresky",
                "https://linkedin.com/in/muhammad-resky-rachmanto",
              ],
              image:
                "https://my-portfolio-mreskys-projects.vercel.app/logo.png",
              description:
                "Chemical Engineer, Python Enthusiast, Data Scientist, and Fullstack Developer.",
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

