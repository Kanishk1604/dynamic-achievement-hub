
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-16 dark:bg-background dark:text-foreground">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-background/10 dark:to-background/20 animated-bg -z-10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="container px-4 mx-auto text-center">
        <p className="inline-block mb-4 px-3 py-1 text-sm bg-primary/10 text-primary rounded-full fade-up dark:bg-primary/20">
          Hello, I'm a Software Engineer
        </p>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight font-serif fade-up animation-delay-100 dark:text-foreground">
          Kanishk <span className="text-primary">Saini</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-8 fade-up animation-delay-200 dark:text-foreground/70">
          Computer Science graduate specializing in full-stack development, 
          with expertise in React.js, Node.js, and various modern technologies. 
          Building innovative solutions that make a difference.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-up animation-delay-300">
          <Button size="lg" className="w-full sm:w-auto">
            View My Work
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto">
            Contact Me
          </Button>
        </div>
        
        <div className="mt-16 fade-up animation-delay-400">
          <a 
            href="#about"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-background shadow-md hover:shadow-lg transition-all duration-300 border border-border animate-bounce dark:bg-secondary/20 dark:border-border/50"
            aria-label="Scroll down"
          >
            <ArrowDown className="text-primary" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

