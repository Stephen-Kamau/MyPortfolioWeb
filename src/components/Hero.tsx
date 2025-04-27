
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center bg-gradient-to-br from-blue-50 via-indigo-50 to-white px-4 py-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              <span className="block">Hi, I'm</span>
              <span className="block text-blue-600">STEPHEN KAMAU</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 font-semibold">
              Data Engineer @ Prospect33 | Backend & ML Specialist
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Transforming complex data challenges into innovative engineering solutions, 
              leveraging machine learning and cloud technologies to drive impactful insights.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="default" className="gap-2">
                <a href="mailto:stiveckamash@gmail.com">
                  <Mail className="w-4 h-4" />
                  Contact Me
                </a>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <a href="https://github.com/Stephen-Kamau" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <a href="https://www.linkedin.com/in/stephen-kamau" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1596079890744-c1a0462d0975?auto=format&fit=crop&q=80&w=2071"
                  alt="Stephen Kamau - Data Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
