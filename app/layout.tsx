import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boa Wo Nua Initiative – Empowering Communities, Changing Lives",
  description:
    "Boa Wo Nua Initiative is a non-profit organization committed to empowering communities through education, health, and sustainable development programs.",
  keywords: [
    "Boa Wo Nua Initiative",
    "NGO Ghana",
    "community empowerment",
    "education",
    "health initiatives",
    "sustainable development",
    "charity organization",
    "donations",
  ],
  authors: [{ name: "Boa Wo Nua Initiative Team" }],

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
