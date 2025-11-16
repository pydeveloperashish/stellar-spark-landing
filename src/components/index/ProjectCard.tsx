
import React, { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProjectProps {
  id: string;
  title: string;
  description: string;
  image: {
    gradient: string;
    label: string;
    thumbnail: string;
  };
  summary: string;
  tags: string[];
  link: string;
  loom: string;
}

export const ProjectCard = ({ id, title, description, image, summary, tags, link, loom }: ProjectProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const finalVideoUrl = loom;
  const thumbnail = `/${image.thumbnail}` || "/placeholder.svg";

  return (
    <Card 
      className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/30 hover:border-purple-500/40 transition-all duration-500 group hover:shadow-[0_8px_32px_rgba(139,92,246,0.2)] rounded-2xl overflow-hidden h-full flex flex-col cursor-pointer"
    >
      <CardHeader className="pb-2">
        <div 
          className="h-72 -mt-6 -mx-6 mb-4 relative overflow-hidden rounded-2xl group-hover:from-purple-800/30 group-hover:to-blue-800/30 transition-all duration-500"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Video thumbnail with hover effect */}
          <a href={finalVideoUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-pointer">
            <AspectRatio ratio={16/9} className="w-full h-full">
              <motion.div 
                className="absolute inset-0 w-full h-full bg-black/30 flex items-center justify-center z-10"
                animate={{ 
                  opacity: isHovering ? 1 : 0.7,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="rounded-full bg-purple-500/80 p-2.5 backdrop-blur-sm"
                  animate={{ 
                    scale: isHovering ? 1.1 : 1,
                  }}
                  transition={{ 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  <Play className="h-6 w-6 text-white" />
                </motion.div>
              </motion.div>
              
              {/* Thumbnail image */}
              <motion.img
                src={thumbnail}
                alt={`${title} thumbnail`}
                className="object-cover w-full h-full"
                animate={{ 
                  scale: isHovering ? 1.05 : 1,
                }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Light beam effect on hover */}
              <div className="absolute -inset-full h-[500%] w-[25%] bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform-gpu hidden group-hover:block group-hover:animate-[shimmer_3s_ease-in-out_infinite]"></div>
            </AspectRatio>
          </a>
        </div>
        <CardTitle className="text-lg font-bold bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-blue-300 transition-all duration-300">{title}</CardTitle>
        <CardDescription className="text-gray-300 mt-1 text-sm font-medium">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-gray-400 text-sm flex-grow">
        <p className="leading-relaxed line-clamp-3">{summary}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 text-xs bg-purple-500/10 text-purple-300 rounded-md border border-purple-500/20">
              {tag}
            </span>
          ))}
        </div>
        
        {/* Gradient line that animates on hover */}
        <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-purple-500/60 to-blue-500/60 transition-all duration-700 rounded-full"></div>
      </CardContent>
      <CardFooter className="pt-1">
        <Button 
          variant="ghost" 
          className="ml-auto group/btn text-gray-300 hover:text-white hover:bg-purple-900/30 rounded-lg border border-transparent hover:border-purple-500/30 text-sm" 
          size="sm"
          asChild
        >
          <a href={finalVideoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
            <span className="mr-1.5">Watch Video</span>
            <motion.div
              whileHover={{ rotate: 45 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight className="h-3.5 w-3.5 opacity-70 group-hover/btn:text-purple-300" />
            </motion.div>
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};
