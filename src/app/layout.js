import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/Components/Footer/Footer";
import NavbarWrapper from '@/Components/NavBar/NavbarWrapper';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Expert Welder Portfolio | Douala, Cameroon",
  description: "Discover the exceptional welding craftsmanship of a skilled professional based in Douala, Cameroon. View projects, services, and contact information.",
  keywords: "welder, welding, Douala, Cameroon, metal fabrication, portfolio",
  author: "WeldMaster",
  openGraph: {
    title: "Expert Welder Portfolio | Douala, Cameroon",
    description: "Skilled welding professional showcasing exceptional craftsmanship in Douala, Cameroon.",
    images: [
      {
        url: "https://picsum.photos/1200/630?random=1",
        width: 1200,
        height: 630,
        alt: "Welder at work in Douala, Cameroon",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}
      >
        <NavbarWrapper />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}