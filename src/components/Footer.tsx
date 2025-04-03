
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold font-serif mb-2">Kanishk Saini</h2>
            <p className="text-secondary-foreground/80 max-w-md">
              Software Engineer specializing in full-stack development.
              Building innovative solutions with modern technologies.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/Kanishk1604"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary-foreground/10 rounded-full text-secondary-foreground hover:bg-primary hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/kanishk-saini-/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary-foreground/10 rounded-full text-secondary-foreground hover:bg-primary hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:saini56@uwindsor.ca"
                className="p-2 bg-secondary-foreground/10 rounded-full text-secondary-foreground hover:bg-primary hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            
            <p className="text-secondary-foreground/60 text-sm">
              &copy; {currentYear} Kanishk Saini. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
