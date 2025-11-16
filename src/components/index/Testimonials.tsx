
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

type TestimonialProps = {
  name: string;
  company: string;
  text: string;
  stars: number;
  imageUrl?: string;
};

const Testimonial = ({ name, company, text, stars, imageUrl }: TestimonialProps) => {
  return (
    <Card className="h-full bg-slate-800/70 border border-purple-500/20 backdrop-blur-md overflow-hidden rounded-xl hover:shadow-[0_0_25px_rgba(139,92,246,0.3)] transition-all duration-500">
      <CardContent className="pt-4 px-4 sm:px-6 pb-6 sm:pb-8 relative h-full">
        <Quote className="absolute top-2 right-2 w-8 h-8 text-purple-400/20" />
        <div className="flex items-start gap-3 mb-4">
          {imageUrl ? (
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-400/30 flex-shrink-0">
              <img 
                src={imageUrl} 
                alt={name} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  console.log(`Error loading profile image: ${target.src}`);
                  target.onerror = null;
                  // Fallback to default avatar
                  target.src = "https://images.unsplash.com/photo-1649972904349-6e44c42644a7";
                }} 
              />
            </div>
          ) : (
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400/30 to-blue-500/30 flex items-center justify-center border-2 border-purple-400/30 flex-shrink-0">
              <span className="text-lg font-semibold text-white">{name.charAt(0)}</span>
            </div>
          )}
          <div>
            <h4 className="font-semibold text-lg text-white">{name}</h4>
            <p className="text-purple-300/80 text-xs">{company}</p>
            <div className="flex mt-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < stars ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="pl-2 border-l-2 border-purple-500/30">
          <p className="text-gray-200 italic leading-relaxed text-sm max-h-32 overflow-y-auto pr-2">
            &ldquo;{text}&rdquo;
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sambit Mahapatra",
      company: "Founder, Hobglobin",
      text: "I highly recommend Ashish for his incredible passion and dedication in developing Retrieval-Augmented Generation (RAG) solutions for Large Language Models (LLMs). His willingness to tackle complex challenges head-on have been instrumental in driving our projects forward. His positive attitude and collaborative spirit make him a joy to work with, always ready to lend a hand or share insights with colleagues. Ashish's commitment to continuous learning and improvement in the field of RAG LLM solutions is truly admirable.",
      stars: 5,
      imageUrl: "/lovable-uploads/sambit.webp" 
    },
    {
      name: "Debjyoti Banerjee",
      company: "ML Engineer, Hobglobin",
      text: "I had the pleasure of working closely with Ashish, and I am continually impressed by his deep knowledge and expertise in the fields of Large Language Models (LLM) and Retrieval-Augmented Generation (RAG). Ashish possesses a remarkable ability to not only understand the intricacies of LLM and RAG but also to apply this knowledge in practical, innovative ways. His proficiency in leveraging these technologies has significantly enhanced our projects, leading to more efficient and effective solutions. Moreover, Ashish's proactive approach to staying updated with the latest advancements in the field ensures that our team is always at the cutting edge of technology. His contributions have been instrumental in optimizing our workflows and improving our overall productivity. I highly recommend Ashish for any role that requires expertise in LLM and RAG. His dedication, expertise, and collaborative spirit make them an invaluable asset to any organization.",
      stars: 5,
      imageUrl: "/lovable-uploads/debjyoti.webp"
    },
    {
      name: "Jame",
      company: "Client, Upwork",
      text: "He is professional and careful with your project. He is flexible and open to new approaches. I recommend him",
      stars: 5,
      imageUrl: "/lovable-uploads/upwork_logo.webp"
    },
  ];

  const isMobile = useIsMobile();
  const [api, setApi] = React.useState<any>(null);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="px-4 relative">
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
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%] md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Testimonial {...testimonial} />
                </motion.div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="flex justify-center items-center gap-2 mt-6">
          <CarouselPrevious className="relative static md:absolute md:-left-12 md:top-1/2 md:-translate-y-1/2 bg-purple-500/20 hover:bg-purple-500/40 border-purple-500/30" />
          
          <div className="text-white bg-purple-500/20 px-3 py-1 rounded-full text-xs font-medium">
            {current} / {count}
          </div>
          
          <CarouselNext className="relative static md:absolute md:-right-12 md:top-1/2 md:-translate-y-1/2 bg-purple-500/20 hover:bg-purple-500/40 border-purple-500/30" />
        </div>
      </Carousel>
    </div>
  );
};
