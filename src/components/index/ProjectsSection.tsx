import React, { useState, useEffect } from "react";
import { ProjectCard } from "./ProjectCard";
import { portfolioProjects } from "@/data/portfolioProjects";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const ProjectsSection = () => {
  const isMobile = useIsMobile();
  const [api, setApi] = React.useState<any>(null);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  // Group projects into chunks of 4 for 2x2 grid
  const projectsPerSlide = 4;
  const projectChunks = React.useMemo(() => {
    const chunks = [];
    for (let i = 0; i < portfolioProjects.length; i += projectsPerSlide) {
      chunks.push(portfolioProjects.slice(i, i + projectsPerSlide));
    }
    return chunks;
  }, []);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="py-20 px-4 md:px-8 bg-black/40 backdrop-blur-md">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 drop-shadow-xl">
              <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-5"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Explore a selection of my recent work and innovative AI solutions
            </p>
          </motion.div>
        </div>
        
        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
              containScroll: "trimSnaps",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projectChunks.map((chunk, chunkIndex) => (
                <CarouselItem 
                  key={chunkIndex} 
                  className="pl-2 md:pl-4 basis-full"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: chunkIndex * 0.1 }}
                    className="h-full p-1"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                      {chunk.map((project, projectIndex) => (
                        <motion.div
                          key={project.id}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: projectIndex * 0.1 }}
                        >
                          <ProjectCard {...project} />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center items-center gap-4 mt-8">
              <CarouselPrevious className="relative static h-10 w-10 bg-purple-500/20 hover:bg-purple-500/40 border-purple-500/30 text-white" />
              
              <div className="text-white bg-purple-500/20 px-4 py-2 rounded-full text-sm font-medium">
                {current} / {count}
              </div>
              
              <CarouselNext className="relative static h-10 w-10 bg-purple-500/20 hover:bg-purple-500/40 border-purple-500/30 text-white" />
            </div>
          </Carousel>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
