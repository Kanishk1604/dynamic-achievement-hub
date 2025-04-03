
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Spiritual Knowledge Assistant",
    description: "There are always 100 beliefs/esoteric solutions to any problem, but someone who is confused and hesitant cannot decipher what to do in that very moment of worry. Hence, this website allows you to get the answer to your problem through esoteric knowledge.",
    tags: ["Python", "Flask", "NLP", "React"],
    timeline: "Nov 2024 - Feb 2025",
    features: [
      "Built a dynamic website providing spiritual guidance and answers derived from sacred texts like the Bhagavad Gita and Bible.",
      "Implemented natural language processing (NLP) techniques to accurately understand user queries in both English and Hindi, achieving a comprehension accuracy of 95%.",
      "Integrated a responsive React frontend, improving user satisfaction ratings by 30% due to seamless interactions."
    ],
    github: "https://github.com/Kanishk1604/spiritual-knowledge",
    liveDemo: "https://bhagwatwisdom-app.lovable.app/"
  },
  {
    title: "Intelligent Assistant Chatbot",
    description: "I always wanted to make an automated bot that assists with any company's login portal, handle important dates for users and allow user queries to be dealt with ease.",
    tags: ["Node.js", "Twilio", "Google Calendar API"],
    timeline: "Nov 2024 - Feb 2025",
    features: [
      "Integrated Twilio for seamless communication via voice and SMS, resulting in a 40% reduction in manual customer support tasks.",
      "Implemented Google Calendar API to efficiently schedule and save over 300 important user-related dates and reminders monthly."
    ],
    github: "https://github.com/Kanishk1604/chatbot-implementation",
    liveDemo: "https://chatbot-demo.example.com"
  },
  {
    title: "Universal Code Translator",
    description: "Everytime I failed solving a leetcode problem, when I went to see its solution, I would not always find a solution in my preferred programming language, so I created this website to allow code translation from one language to another.",
    tags: ["Python", "Flask", "Streamlit", "Heroku"],
    timeline: "Oct 2024 - Present",
    features: [
      "Developed a code translator that converts code between multiple programming languages.",
      "Implemented language detection and syntax highlighting for improved usability and accuracy.",
      "Optimized API calls to reduce processing time by 40%, ensuring fast and efficient translations.",
      "Deployed on Heroku for seamless cloud-based access with a user-friendly Streamlit-based interface."
    ],
    github: "https://github.com/Kanishk1604/IAS--universal-code-translator",
    liveDemo: "https://code-translator.example.com"
  }

];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <div 
      className="flip-card h-[500px] w-full"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`flip-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
        {/* Front Card - Story */}
        <div className="flip-card-front p-6 flex flex-col">
          <h3 className="text-2xl font-serif font-bold mb-3">{project.title}</h3>
          <div className="text-sm text-primary mb-4">{project.timeline}</div>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <Badge key={i} variant="secondary">{tag}</Badge>
            ))}
          </div>
          <div className="flex-grow">
            <p className="text-foreground/90 text-base leading-relaxed">{project.description}</p>
          </div>
          <div className="text-center mt-4 text-primary text-sm font-medium">
            Hover to see details
          </div>
        </div>

        {/* Back Card - Details */}
        <div className="flip-card-back p-6 flex flex-col">
          <h3 className="text-xl font-serif font-bold mb-3">{project.title}</h3>
          <div className="flex-grow overflow-y-auto">
            <h4 className="text-lg font-medium mb-3 text-primary">What I accomplished:</h4>
            <ul className="space-y-3 mb-4">
              {project.features.map((feature, i) => (
                <li key={i} className="text-foreground/80 text-sm flex">
                  <span className="text-primary mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between pt-4 border-t mt-auto">
            <Button variant="outline" size="sm" className="gap-2" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github size={16} />
                <span>Code</span>
              </a>
            </Button>
            <Button size="sm" className="gap-2" asChild>
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 font-serif">Featured <span className="text-primary">Projects</span></h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-foreground/80">
            A showcase of my recent development work, personal projects, and contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
