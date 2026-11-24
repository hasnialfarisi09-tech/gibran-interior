import Hero from "@/components/Hero";
import ClientGalleryHighlight from "@/components/ClientGalleryHighlight";
import TrustStats from "@/components/TrustStats";
import ServicesSection from "@/components/ServicesSection";
import MaterialGuide from "@/components/MaterialGuide";
import ProcessSection from "@/components/ProcessSection";
import RegionalCoverage from "@/components/RegionalCoverage";
import FaqSection from "@/components/FaqSection";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientGalleryHighlight />
      <TrustStats />
      <ServicesSection />
      <MaterialGuide />
      <ProcessSection />
      <RegionalCoverage />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
