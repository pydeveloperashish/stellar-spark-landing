
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Monitor, Code, Cpu, Database } from "lucide-react";

const AboutSection = () => {
  const skills = [
    { name: "Full Stack Development", icon: <Monitor className="h-5 w-5" /> },
    { name: "AI Integration", icon: <Cpu className="h-5 w-5" /> },
    { name: "RAG Pipelines", icon: <Database className="h-5 w-5" /> },
    { name: "LLM Fine-tuning", icon: <Code className="h-5 w-5" /> },
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-black/60 to-purple-900/10 backdrop-blur-md">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 drop-shadow-xl">
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-4"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-slate-700/50 shadow-[0_5px_30px_rgba(0,0,0,0.3)] rounded-xl overflow-hidden cursor-default">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 blur-lg opacity-30 animate-pulse"></div>
                    <Avatar className="w-64 h-64 border-4 border-purple-500/30 rounded-full overflow-hidden">
                      <AvatarImage 
                        src="lovable-uploads/ashish.webp" 
                        alt="Ashish Kushwaha" 
                        className="object-cover" 
                      />
                      <AvatarFallback className="text-5xl bg-gradient-to-br from-slate-700 to-slate-800 text-slate-300">
                        AK
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>

                <div className="md:w-2/3">
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 mb-4">Ashish Kushwaha</h3>
                  <p className="text-lg text-purple-300 mb-4 font-medium">
                    AI Solutions Consultant | 5+ Years Experience
                  </p>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Specialized in building AI powered Apps, MVPs to validate ideas, implementing RAG pipelines, finetuning LLM models, chatbots, and developing image-object segmentation for healthcare usecase.
                    I'm a lead engineer and I handle ins and outs of every project I involve in, and I'm the one who will be interacting with you directly and personally.
                  </p>
                  
                  <div className="mb-6 border-l-4 border-purple-500/50 pl-4 py-2 bg-purple-500/5 rounded-r-md">
                    <p className="text-gray-200 italic">
                      "I only take 2 projects per month to ensure I give my utmost focus to each client, making sure I successfully tick every checkbox."
                    </p>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-white text-lg font-medium mb-3">Core Skills:</h4>
                    <div className="flex flex-wrap gap-3">
                      {skills.map((skill, index) => (
                        <div 
                          key={index} 
                          className="flex items-center gap-2 bg-purple-500/10 px-3 py-2 rounded-full border border-purple-500/20"
                        >
                          {skill.icon}
                          <span className="text-gray-200">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
