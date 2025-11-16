
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Users, MessageSquare, ArrowRight } from "lucide-react";

const WhyChooseUsSection = () => {
  const benefits = [
    {
      icon: <Clock className="h-5 w-5 text-green-400" />,
      title: "MVP in weeks, not months",
      description: "Get your product to market faster with rapid development cycles"
    },
    {
      icon: <Users className="h-5 w-5 text-blue-400" />,
      title: "Experts assigned to every piece",
      description: "Specialized team members handling their area of expertise"
    },
    {
      icon: <MessageSquare className="h-5 w-5 text-purple-400" />,
      title: "Clear communications",
      description: "Direct access to your development team without middle managers"
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-yellow-400" />,
      title: "Experienced execution",
      description: "Proven approach from someone who's successfully delivered"
    }
  ];
  
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-purple-900/10 to-black/80 backdrop-blur-md">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 drop-shadow-xl">
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Why Work With Us
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
          <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-slate-700/50 shadow-[0_5px_30px_rgba(0,0,0,0.3)] rounded-xl overflow-hidden">
            <CardContent className="pt-8 px-6 sm:px-10 pb-10 sm:pb-12">
              <div className="text-gray-200 mb-10 text-lg leading-relaxed">
                <p className="font-medium text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 mb-6">
                  You've got the idea. We've got the speed, skill, and system to bring it to life — fast.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  {benefits.map((benefit, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      <div className="mt-1">{benefit.icon}</div>
                      <div>
                        <h3 className="font-medium text-white mb-1">{benefit.title}</h3>
                        <p className="text-gray-400 text-sm">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10 p-5 border-l-4 border-purple-500/50 bg-purple-500/5 rounded-r-md">
                  <p className="mb-4">I'll be your direct point of contact — no middle managers, no ghosting, just real progress every week.</p>

                  <div className="flex items-center justify-center space-x-4 my-5">
                    <div className="text-white font-medium">Your vision</div>
                    <ArrowRight className="h-5 w-5 text-gray-400" />
                    <div className="text-purple-300 font-medium">our blueprint</div>
                    <ArrowRight className="h-5 w-5 text-gray-400" />
                    <div className="text-blue-300 font-medium">live product</div>
                  </div>

                  <p className="text-center italic text-xl text-white mt-6">Let's make it real.</p>
                </div>
              </div>
              
              <div className="flex justify-center mt-10">
                <Button 
                  className="group px-8 py-6 text-lg bg-gradient-to-r from-purple-600/80 to-blue-600/80 hover:from-purple-600 hover:to-blue-600 backdrop-blur-sm border border-white/20 text-white font-medium shadow-[0_0_15px_rgba(139,92,246,0.4)] hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] transition-all duration-300" 
                  size="lg"
                  asChild
                >
                  <a href="https://cal.com/ashish-kushwaha-q1pvro/developerashish" className="flex items-center">
                    Book a Strategy Call
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
