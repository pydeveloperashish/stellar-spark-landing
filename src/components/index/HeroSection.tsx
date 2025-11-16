
import React from "react";
import { Button } from "@/components/ui/button";
import { MatrixText } from "@/components/ui/matrix-text";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-black/80 via-slate-900/70 to-purple-900/30 backdrop-blur-md py-12 px-6 sm:px-10 rounded-2xl border border-white/10 max-w-4xl mx-auto w-full shadow-[0_0_50px_rgba(139,92,246,0.15)]"
      >
        {/* Matrix Text Animation for Craftify Agents */}
        <div className="mb-6 flex justify-center">
          <MatrixText
            text={isMobile ? "Craftify" : "Craftify Agents"}
            className="h-auto py-2 text-center"
            fontSize={isMobile ? "text-3xl" : "text-4xl md:text-6xl"} 
          />
        </div>
        
        {isMobile && (
          <div className="flex justify-center mb-4">
            <MatrixText
              text="Agents"
              className="h-auto py-1 text-center"
              fontSize="text-3xl"
            />
          </div>
        )}
        
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-blue-200 mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
        >
          Transforming Ideas into Intelligent Solutions
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl text-center text-gray-100 max-w-3xl mx-auto drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] mb-10"
        >
          Leveraging AI to solve complex problems and drive innovation
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex justify-center"
        >
          <Button 
            className="group px-7 sm:px-10 py-6 sm:py-7 text-base sm:text-lg bg-gradient-to-r from-purple-600/80 to-blue-600/80 hover:from-purple-600/90 hover:to-blue-600/90 backdrop-blur-sm border border-white/20 text-white font-medium shadow-[0_0_15px_rgba(139,92,246,0.5)] hover:shadow-[0_0_25px_rgba(139,92,246,0.7)] transition-all duration-300" 
            size="lg"
            asChild
          >
            <a href="https://cal.com/ashish-kushwaha-q1pvro/developerashish" className="flex items-center">
              Book a Call 
              <ChevronRight className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};
