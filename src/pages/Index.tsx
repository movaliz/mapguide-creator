import { useRef } from "react";
import { useState } from "react";
import AppHeader from "@/components/AppHeader";
import PricingModal from "@/components/PricingModal";
import HowItWorks from "@/components/HowItWorks";
import PreviewMockup from "@/components/PreviewMockup";
import PricingSection from "@/components/PricingSection";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import HeroSection from "@/components/HeroSection";
import BlogSection from "@/components/BlogSection";

const Index = () => {
  const [pricingOpen, setPricingOpen] = useState(false);
  const howItWorksRef = useRef<HTMLDivElement>(null);

  const scrollToUpload = () => {
    const section = document.getElementById("how-it-works");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader hasPlaces={false} onExportPDF={() => {}} onPrint={() => {}} onShare={() => {}} />

      <HeroSection onCTA={scrollToUpload} />
      <SocialProof />
      <HowItWorks />

      <PreviewMockup />
      <PricingSection onSelectPlan={() => setPricingOpen(true)} />
      <BlogSection />
      <FAQ />
      <FinalCTA onCTA={scrollToUpload} />

      <footer className="py-12 text-center text-xs text-muted-foreground border-t border-border">
        exportmymap.com — Share your saved places with anyone
      </footer>

      <PricingModal open={pricingOpen} onClose={() => setPricingOpen(false)} />
    </div>
  );
};

export default Index;
