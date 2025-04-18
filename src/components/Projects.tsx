
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Spiritual Knowledge Assistant",
    tagline: "📖 AI-powered spiritual wisdom at your fingertips",
    description:
      "This full-stack application bridges ancient wisdom with modern technology. Built to help users seek spiritual clarity through sacred texts using AI-driven conversations.",
    tags: ["React.js", "Flask", "Python", "NLP", "Vercel", "Full Stack"],
    timeline: "Nov 2024 - Feb 2025",
    features: [
      "Developed an end-to-end spiritual AI assistant using a Python Flask backend and a dynamic React.js frontend.",
      "Engineered RESTful APIs for handling user queries and NLP-based response generation, with multilingual support (English & Hindi).",
      "Created a fully responsive frontend UI using React, Tailwind CSS, and TypeScript for seamless user experience across devices.",
      "Integrated Flask routes with NLP models trained on spiritual texts to provide contextual and relevant answers.",
      "Deployed the application globally using Vercel for frontend and Flask backend hosted via render/cloud solution.",
    ],
    github: "https://github.com/Kanishk1604/spiritualKnowledge",
    liveDemo: "https://spiritual-knowledge.vercel.app/"
  },
  {
    title: "Intelligent Assistant Chatbot",
    tagline: "🗨️ Smart voice + SMS handling for better user experience",
    description: "I always wanted to make an automated bot that assists with any company's login portal, handle important dates for users and allow user queries to be dealt with ease.",
    tags: ["Node.js", "Twilio", "Google Calendar API"],
    timeline: "Nov 2024 - Feb 2025",
    features: [
      "Integrated Twilio for seamless communication via voice and SMS, resulting in a 40% reduction in manual customer support tasks.",
      "Implemented Google Calendar API to efficiently schedule and save over 300 important user-related dates and reminders monthly."
    ],
    github: "https://github.com/Kanishk1604/chatbot-implementation",
    liveDemo: "https://mamtasaini.app.n8n.cloud/webhook/fb6e03c6-9219-46c2-9c2e-a3ad9c848095/chat"
  },
  {
    title: "Universal Code Translator",
    tagline: "🔁 Bridge the gap between languages, instantly",
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
  },
  {
    title: "Solar System",
    tagline: "🌌 A 3D interactive experience of our cosmic neighborhood",
    description: "",
    tags: ["Java", "Java3D"],
    timeline: "Jan 2023 - April 2023",
    features: [
      "Utilized Git and GitHub for version control, ensuring seamless integration of over 200 code contributions from team members, reducing code conflicts by 80%",
      "Implemented Scrum methodologies, conducting daily stand-up meetings and bi-weekly sprints, resulting in a 20% improvement in project efficiency and on-time delivery",
      "Successfully delivered the solar system project within the specified 3-month time frame, meeting all requirements and receiving a final grade of 97%"
    ],
    github: "https://github.com/Kanishk1604/SolarSystem",
    liveDemo: ""
  },
  {
    title: "Dynamic Portfolio Hub",
    tagline: "🧩 My evolving digital identity and project showcase",
    description: "This portfolio serves as a centralized hub to showcase my projects, achievements, and experiences while continuously evolving with new features and design improvements.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vercel", "Figma", "Open Graph", "Responsive Design"],
    timeline: "April 2023 - Present",
    features: [
      "Designed and developed a fully responsive portfolio using React.js and Tailwind CSS, deployed seamlessly with Vercel.",
      "Implemented interactive project cards with flip animations to enhance user engagement.",
      "Integrated Open Graph images for rich previews across social media platforms.",
      "Showcased a growing collection of personal projects, achievements, and certifications with a dynamic layout.",
      "Planned continuous improvements including automated project addition and Google Analytics for tracking engagement.",
      "Optimized for recruiter-friendly viewability with ATS considerations and clean UI/UX principles."
    ],
    github: "https://github.com/Kanishk1604/dynamic-achievement-hub",
    liveDemo: "https://kanishk-portfolio.vercel.app/"
  },
  {
    title: "Mobile Selling Store",
    tagline: "📱 Comprehensive e-commerce platform for mobile phones",
    description: "",
    tags: ["HTML", "CSS", "Bootstrap 4", "JavaScript", "PHP", "MySQL"],
    timeline: "Sep 2022 - Dec 2022",
    features: [
      "Led a team of 3: Organized meetings, delegated tasks and helped teammates debug over 300 lines of code",
      "Implemented the entire login system to allow CRUD operations on the user list and user validation",
      "Created a responsive homepage website that allows purchasing of mobile phones for teammates to use",
      "Designed the overall website concept and layout helping us save over 20 hours of work"
    ],
    github: "https://github.com/Kanishk1604/mobile-store",
    liveDemo: ""
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
          <div className="text-sm text-primary mb-2">{project.timeline}</div>
          
          <div className="flex-grow flex items-center justify-center">
            <p className="text-lg font-medium text-primary/80 text-center">{project.tagline}</p>
          </div>
          
          <div className="text-center mt-4 text-primary text-sm font-medium">
            Hover to see details
          </div>
        </div>

        {/* Back Card - Details */}
        <div className="flip-card-back p-6 flex flex-col">
          <h3 className="text-xl font-serif font-bold mb-3">{project.title}</h3>
          <p className="text-sm font-medium text-primary/80 mb-4">{project.tagline}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, i) => (
              <Badge key={i} variant="outline">{tag}</Badge>
            ))}
          </div>
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
            {project.liveDemo && (
              <Button size="sm" className="gap-2" asChild>
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  // Get the projects to display based on showMore state
  const displayedProjects = showMore ? projects : projects.slice(0, 3);

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
          {displayedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {projects.length > 3 && (
          <div className="text-center mt-12">
            <Button 
              variant="ghost" 
              onClick={() => setShowMore(!showMore)}
              className="text-primary hover:text-primary/80 font-medium flex items-center gap-2 mx-auto transition-all hover:underline"
            >
              {showMore ? (
                <>
                  Show Less <ChevronUp size={18} />
                </>
              ) : (
                <>
                  Show More Projects <ChevronDown size={18} />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
