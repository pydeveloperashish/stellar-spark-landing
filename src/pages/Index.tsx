
import React, { lazy, Suspense } from "react";
import { Navbar } from "@/components/index/Navbar";
import { HeroSection } from "@/components/index/HeroSection";
import { motion } from "framer-motion";

// Lazy loaded components
const ServicesSection = lazy(() => import("@/components/index/ServicesSection"));
const ProjectsSection = lazy(() => import("@/components/index/ProjectsSection"));
const TrustedAgencies = lazy(() => import("@/components/index/TrustedAgencies"));
const TestimonialsSection = lazy(() => import("@/components/index/TestimonialsSection"));
const AboutSection = lazy(() => import("@/components/index/AboutSection"));
const WhyChooseUsSection = lazy(() => import("@/components/index/WhyChooseUsSection"));
const Footer = lazy(() => import("@/components/index/Footer"));

// Loading component with subtle animation
const SectionLoader = () => (
  <div className="w-full py-12 flex justify-center">
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      className="w-12 h-12 rounded-full border-t-2 border-l-2 border-purple-500 animate-spin"
    />
  </div>
);

const Index = () => {
  return (
    <div className="w-full min-h-screen relative bg-black">
      {/* Simple squares background pattern */}
      <div className="fixed inset-0 z-0 bg-grid-pattern"></div>

      {/* Content */}
      <div className="relative z-10 bg-transparent">
        {/* Navigation Bar with Social Links */}
        <Navbar />

        {/* Hero Section */}
        <HeroSection />

        {/* Lazy loaded sections with Suspense */}
        <Suspense fallback={<SectionLoader />}>
          <ServicesSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ProjectsSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <TrustedAgencies />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <TestimonialsSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <AboutSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <WhyChooseUsSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default Index;
