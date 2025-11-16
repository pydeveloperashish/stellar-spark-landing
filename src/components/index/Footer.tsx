
import React from "react";
import { Twitter, Linkedin, Youtube, Instagram, Mail, Github } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 px-4 md:px-8 bg-gradient-to-b from-black/60 to-slate-900/40 backdrop-blur-md border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 mb-4">Craftify Agents</h3>
            <p className="text-gray-400 mb-4">Building intelligent solutions for tomorrow's challenges.</p>
            <p className="text-gray-500 text-sm">GSTIN: 22FAUPK3087A1ZP</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
            <address className="text-gray-400 not-italic space-y-1">
              <p>3/2 LIC Colony Infront of Mahavir Recidency,</p>
              <p>Near Gayatri Mandir, Dharampura Road,</p>
              <p>Jagdalpur, Dist. Bastar, Chhattisgarh, India.</p>
              <p>Pin Code: 494001</p>
              <p className="text-purple-300 mt-3 hover:text-purple-200 transition-colors">
                <a href="mailto:ashish@craftifyagents.com">ashish@craftifyagents.com</a>
              </p>
            </address>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <div className="flex flex-wrap gap-4">
              <SocialLink href="https://x.com/ashishllm" icon={<Twitter />} label="Twitter" />
              <SocialLink href="https://www.linkedin.com/in/ashish-kushwaha-45201b179/" icon={<Linkedin />} label="LinkedIn" />
              <SocialLink href="https://discord.com/users/developer_ashish" icon={
                <svg 
                  className="h-5 w-5" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z"/>
                </svg>
              } label="Discord" />
              <SocialLink href="https://www.youtube.com/@developerashish6849" icon={<Youtube />} label="YouTube" />
              <SocialLink href="https://www.instagram.com/developer_ashish.py" icon={<Instagram />} label="Instagram" />
              <SocialLink href="https://github.com/pydeveloperashish" icon={<Github />} label="GitHub" />
              <SocialLink href="mailto:ashish@craftifyagents.com" icon={<Mail />} label="Email" />
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <div className="text-center">
            <div className="inline-block h-10 w-auto mb-4">
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                CRAFTIFY AGENTS
              </span>
            </div>
          </div>
          <p className="text-gray-500 text-sm">© {currentYear} Craftify Agents. All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
};

// Helper component for social links
const SocialLink = ({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label={label}
    className="group"
  >
    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border border-white/5 flex items-center justify-center transition-all duration-300 group-hover:from-purple-600/30 group-hover:to-blue-600/30 group-hover:border-purple-500/20 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.2)]">
      {icon}
    </div>
  </a>
);

export default Footer;
