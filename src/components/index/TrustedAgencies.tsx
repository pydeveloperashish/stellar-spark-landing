
import React from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const TrustedAgencies = () => {
  const isMobile = useIsMobile();
  
  // Real company logos with website links - using original PNG format
  const companies = [
    {
      name: "Sunflower Lab",
      linkedInUrl: "https://www.thesunflowerlab.com/",
      logoSrc: "/lovable-uploads/sunflower.webp"
    },
    {
      name: "Roxanne.ai",
      linkedInUrl: "https://roxanne.ai/",
      logoSrc: "/lovable-uploads/roxanneai.webp"
    },
    {
      name: "Hobglobin",
      linkedInUrl: "https://www.hobglobin.com/",
      logoSrc: "/lovable-uploads/hobglobin.webp"
    },
    {
      name: "Varnika Software Pvt Ltd.",
      linkedInUrl: "https://varnikabiz.com/",
      logoSrc: "/lovable-uploads/vernika.webp"
    },
    {
      name: "Computing Mind Technology",
      linkedInUrl: "https://computingmind.technology/",
      logoSrc: "/lovable-uploads/computingmind.webp"
    }
  ];

  return (
    <section className="py-12 px-4 md:px-8 bg-gradient-to-b from-black/40 to-slate-900/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Trusted by Leading Agencies
            </span>
          </h2>
          <div className="h-1 w-40 md:w-56 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-10"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8"
        >
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full aspect-[16/10] flex items-center justify-center p-2"
            >
              <a 
                href={company.linkedInUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full h-full flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
              >
                <img 
                  src={company.logoSrc} 
                  alt={`${company.name} logo`}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    console.log(`Error loading image: ${target.src}`);
                    target.onerror = null;
                    target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475";
                  }}
                />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedAgencies;
