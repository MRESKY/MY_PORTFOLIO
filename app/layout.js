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
  title: {
    default: "Muhammad Resky Rachmanto | Chemical Engineer & Developer",
    template: "%s | Muhammad Resky Rachmanto"
  },
  description:
    "Official portfolio of Muhammad Resky Rachmanto — Chemical Engineer, Python Enthusiast, Data Scientist, and Fullstack Developer. Explore my projects, publications, and achievements in engineering and software development.",
  keywords: [
    "Muhammad Resky Rachmanto",
    "Resky Rachmanto", 
    "Chemical Engineer",
    "Python Developer",
    "Data Scientist",
    "Fullstack Developer",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
    "Machine Learning",
    "AI Developer"
  ],
  authors: [{ name: "Muhammad Resky Rachmanto", url: "https://my-portfolio-mreskys-projects.vercel.app" }],
  creator: "Muhammad Resky Rachmanto",
  publisher: "Muhammad Resky Rachmanto",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Muhammad Resky Rachmanto | Chemical Engineer & Developer",
    description:
      "Explore my portfolio as a Chemical Engineer and Developer. View my work in Data Science, AI, Machine Learning, and Full-Stack Web Development.",
    url: "https://my-portfolio-mreskys-projects.vercel.app/",
    siteName: "Muhammad Resky Rachmanto Portfolio",
    images: [
      {
        url: "https://my-portfolio-mreskys-projects.vercel.app/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Resky Rachmanto - Chemical Engineer & Developer Portfolio",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Resky Rachmanto | Chemical Engineer & Developer", 
    description: "Chemical Engineer, Python Developer, Data Scientist. Explore my portfolio and projects.",
    images: ["https://my-portfolio-mreskys-projects.vercel.app/images/logo.png"],
    creator: "@mresky",
  },
  metadataBase: new URL("https://my-portfolio-mreskys-projects.vercel.app"),
  alternates: {
    canonical: "https://my-portfolio-mreskys-projects.vercel.app/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/logo.png", type: "image/png" }
    ],
    apple: "/images/logo.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "f336e26fb6e898e4",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Resky Rachmanto",
    url: "https://my-portfolio-mreskys-projects.vercel.app/",
    jobTitle: ["Chemical Engineer", "Full Stack Developer", "Data Scientist"],
    worksFor: {
      "@type": "Organization",
      name: "Freelance"
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Chemical Engineering"
      }
    ],
    knowsAbout: [
      "Chemical Engineering",
      "Python Programming", 
      "Data Science",
      "Machine Learning",
      "Web Development",
      "React",
      "Next.js"
    ],
    sameAs: [
      "https://github.com/mresky",
      "https://linkedin.com/in/muhammad-resky-rachmanto"
    ],
    image: {
      "@type": "ImageObject",
      url: "https://my-portfolio-mreskys-projects.vercel.app/images/logo.png",
      width: 800,
      height: 600
    },
    description: "Chemical Engineer, Python Enthusiast, Data Scientist, and Fullstack Developer specializing in web development and data analysis.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID"
    }
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Muhammad Resky Rachmanto Portfolio",
    url: "https://my-portfolio-mreskys-projects.vercel.app/",
    description: "Official portfolio website showcasing projects and skills in Chemical Engineering and Software Development",
    author: {
      "@type": "Person",
      name: "Muhammad Resky Rachmanto"
    },
    inLanguage: "en-US"
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        
        
        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="color-scheme" content="dark" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Preload important resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

