
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Youtube, Instagram, Mail, Github, Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

export const Navbar = () => {
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/60 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent py-5'}`}
      >
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-xl font-bold text-white">
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Craftify Agents
            </span>
          </div>
          
          {/* Desktop Social Links */}
          {!isMobile && (
            <div className="flex items-center gap-2">
              <SocialButton href="https://x.com/ashishllm" icon={<Twitter className="h-4 w-4" />} label="Twitter" />
              <SocialButton href="https://www.linkedin.com/in/ashish-kushwaha-45201b179/" icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" />
              <SocialButton href="https://discord.com/users/developer_ashish" icon={
                <svg 
                  className="h-4 w-4" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z"/>
                </svg>
              } label="Discord" />
              <SocialButton href="https://www.youtube.com/@developerashish6849" icon={<Youtube className="h-4 w-4" />} label="YouTube" />
              <SocialButton href="https://www.instagram.com/developer_ashish.py/" icon={<Instagram className="h-4 w-4" />} label="Instagram" />
              <SocialButton href="https://github.com/pydeveloperashish" icon={<Github className="h-4 w-4" />} label="GitHub" />
              <SocialButton href="mailto:ashish@craftifyagents.com" icon={<Mail className="h-4 w-4" />} label="Email" />
            </div>
          )}
          
          {/* Mobile Menu Button */}
          {isMobile && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="bg-slate-800/80 hover:bg-slate-700/90 text-white rounded-full h-10 w-10"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          )}
        </div>
      </motion.nav>
      
      {/* Mobile Social Menu */}
      {isMobile && menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="fixed top-16 left-0 right-0 z-40 bg-black/95 backdrop-blur-lg p-6 border-b border-white/10 shadow-xl"
        >
          <div className="grid grid-cols-4 gap-4">
            <SocialButton href="https://x.com/ashishllm" icon={<Twitter className="h-5 w-5" />} label="Twitter" />
            <SocialButton href="https://www.linkedin.com/in/ashish-kushwaha-45201b179/" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
            <SocialButton href="https://discord.com/users/developer_ashish" icon={
              <svg 
                className="h-5 w-5" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z"/>
              </svg>
            } label="Discord" />
            <SocialButton href="https://www.youtube.com/@developerashish6849" icon={<Youtube className="h-5 w-5" />} label="YouTube" />
            <SocialButton href="https://www.instagram.com/developer_ashish.py/" icon={<Instagram className="h-5 w-5" />} label="Instagram" />
            <SocialButton href="https://github.com/pydeveloperashish" icon={<Github className="h-5 w-5" />} label="GitHub" />
            <SocialButton href="mailto:ashish@craftifyagents.com" icon={<Mail className="h-5 w-5" />} label="Email" />
          </div>
        </motion.div>
      )}
    </>
  );
};

// Helper component for social buttons
const SocialButton = ({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
    <Button 
      variant="ghost" 
      size="icon" 
      className="bg-slate-800/80 hover:bg-purple-500/30 text-white rounded-full h-10 w-10 transition-all hover:shadow-[0_0_10px_rgba(139,92,246,0.3)]"
    >
      {icon}
    </Button>
  </a>
);

export default Navbar;
