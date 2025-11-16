
import React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { motion } from "framer-motion";

interface ServiceProps {
  id: number;
  title: string;
  description: string;
  content: string;
  icon: string;
}

export const ServiceCard = ({ title, description, content, icon }: ServiceProps) => {
  return (
    <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/30 hover:border-purple-500/40 transition-all duration-500 h-full group hover:shadow-[0_8px_32px_rgba(139,92,246,0.2)] rounded-xl overflow-hidden cursor-pointer">
      <CardHeader className="pb-2">
        <div className="flex items-center mb-4">
          <div className="p-3.5 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/20 mr-4 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-500">
            <motion.div 
              className="text-3xl text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-400"
              animate={{ 
                y: [0, -3, 0],
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{ 
                duration: 5, 
                ease: "easeInOut", 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            >
              {icon}
            </motion.div>
          </div>
          <CardTitle className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-blue-300 transition-all duration-300">{title}</CardTitle>
        </div>
        <CardDescription className="text-gray-300 text-base font-medium">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-gray-400 pt-3">
        <p className="leading-relaxed">{content}</p>
        <div className="mt-5 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-purple-500/60 to-blue-500/60 transition-all duration-700 rounded-full"></div>
      </CardContent>
    </Card>
  );
};
