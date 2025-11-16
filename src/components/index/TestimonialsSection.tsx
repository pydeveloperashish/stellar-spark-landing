import React from "react";
import { Testimonials } from "./Testimonials";

const TestimonialsSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-black/60 to-purple-900/20 backdrop-blur-md">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 drop-shadow-xl">
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Client Testimonials
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Don't just take my word for it. Here's what clients have to say about working with me.
          </p>
        </div>
        <Testimonials />
      </div>
    </section>
  );
};

export default TestimonialsSection;
