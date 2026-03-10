import CtaSection from "@/components/landing/CtaSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import Footer from "@/components/landing/Footer";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorks from "@/components/landing/HowItWorks";
import Navbar from "@/components/landing/Navbar";
import RolesSection from "@/components/landing/RoleSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UniClub — Every Campus Club, One Platform",
  description:
    "Discover clubs, track events, and never miss what's happening across your college. UniClub unifies clubs from colleges across India.",
  keywords: [
    "college clubs India",
    "campus events",
    "student clubs",
    "college event tracker",
    "UniClub",
  ],
  openGraph: {
    title: "UniClub — Every Campus Club, One Platform",
    description:
      "Discover clubs, track events, and never miss what's happening across your college.",
    url: "https://uniclub.in",
    siteName: "UniClub",
    type: "website",
    // Add og:image once you have one:
    // images: [{ url: "https://uniclub.in/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "UniClub — Every Campus Club, One Platform",
    description: "Discover clubs and events across Indian colleges.",
  },
  alternates: {
    canonical: "https://uniclub.in",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "#0a0a0f" }}>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <RolesSection />
      <CtaSection />
      <Footer />
    </main>
  );
}