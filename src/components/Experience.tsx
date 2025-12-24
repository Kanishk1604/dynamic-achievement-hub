
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Mercor (Contract)",
    location: "Remote",
    period: "Nov 2025- Present",
    description: [
      "Debugging and evaluating Open-Source Repositories ensuring regression free code, validating test patches by analyzing failures tests, and ensuring prompt completeness."
    ],
    skills: []
  },
  {
    title: "Web Developer",
    company: "University of Windsor",
    location: "Windsor, CA",
    period: "Sep 2023 - Dec 2023",
    description: [
      " Built a full-stack quiz app in React to help students explore programs aligned with their interests. I designed a weighted scoring system and worked closely with the marketing team to craft a UI that was both useful and fun. During testing, it helped over 800 students identify personalized academic matches.",
      "Converted key areas of our Future Students website into a Progressive Web App (PWA) using service workers and caching strategies. This allowed pages to load offline, improved speed on mobile, and offered installable access for prospective students—a win for accessibility and retention.",
      " Integrated 10+ Eloqua REST-based forms using vanilla JavaScript and async logic. These forms dynamically validated and submitted student info, contributing to a 30% lift in lead generation across our marketing campaigns.",
      "Tested and optimized over 15+ responsive modules across browsers and devices to ensure seamless UX; containerized builds with Docker to simulate offline caching behavior in a PWA environment. Completed Google Ads certifications and helped launch A/B test campaigns, contributing to measurable improvements in student outreach engagement."
    ],
    skills: ["JavaScript", "HTML", "CSS", "WordPress", "React"]
  },
  {
  title: "Freelance Software & Automation Developer",
  company: "Self-Employed",
  location: "Remote",
  period: "Jan 2024 – Present",
  description: [
    "Developed and launched 3+ full-stack automation platforms using Python, JavaScript, and REST APIs—reducing request load by 40% and serving over 10,000+ users monthly.",
    "Built webhook-driven automation systems with Node.js and PostgreSQL, integrating Gmail, Twilio, and calendar APIs to handle 2,000+ user interactions per month.",
    "Deployed scalable microservices using Java and Spring Boot, improving client-side response time by 35% and enabling real-time transaction handling.",
    "Mentored 3 junior developers, led architecture reviews, and enforced clean, test-driven code via JUnit, Postman, and GitHub pull request workflows.",
    "Collaborated with BFSI clients to define scope, establish automation pipelines, and secure third-party API integrations with sensitive business logic."
  ],
  skills: ["Python", "Node.js", "Java", "REST APIs", "PostgreSQL", "Twilio", "Docker", "GitHub", "Flask"]

  },
  {
    title: "Research Assistant",
    subtitle: "Supervised under Dr. Asish Mukhopadhyay",
    company: "University of Windsor",
    location: "Windsor, CA",
    period: "Sep 2024 - Apr 2025",
    description: [
      "Developed a Python simulation tool that generates uniformly random outerplanar graphs with up to 12 vertices, accurately reproducing complex block–cutvertex structures with an average of 3 distinct cut–vertices per graph.",
      "Engineered a recursive decomposition framework implementing 3 core procedures that, in simulation tests, produced over 1,000 unique graph instances in under 5 seconds on standard hardware.",
      "Implemented precise probability sampling techniques based on Schroeder and Catalan numbers, achieving 100% fidelity in forced-sample simulations that mirror theoretical models."
    ],
    skills: ["Python", "Graph Theory", "Algorithm Design", "Computer Simulation"]
  },
{
  title: "Teaching Assistant",
  company: "University of Windsor",
  location: "Windsor, ON",
  period: "Jan 2024 – Apr 2025",
  description: [
    "Supported over 300 students across 3 core CS courses: Key Concepts of Computer Science, Theoretical Fundamentals of Computer Science (under Dr. Peter Tsin), and Computer Graphics with C++.",
    "Held weekly office hours and Q&A sessions to assist with debugging, assignment walkthroughs, and conceptual clarity in logic, recursion, and OpenGL rendering.",
    "Assisted in grading midterms, projects, and assignments, ensuring fair and consistent evaluation while providing detailed feedback to improve learning outcomes.",
    "Mentored students struggling with foundational CS and math-heavy concepts, using visual explanations and analogies to bridge abstract theory with real-world understanding.",
    "Utilized Brightspace and Blackboard to manage coursework, post announcements, and coordinate grade feedback in collaboration with faculty."
  ],
  skills: ["C++", "OpenGL", "Discrete Mathematics", "Teaching & Mentorship", "Brightspace", "Blackboard", "Debugging", "Algorithms", "Academic Support"]
}

];

const ExperienceCard = ({ experience }: { experience: typeof experiences[0] }) => {
  return (
    <Card className="w-full mb-8">
      <CardHeader>
        <CardTitle className="font-serif">{experience.title}</CardTitle>
        {experience.subtitle && (
          <p className="text-sm text-muted-foreground">{experience.subtitle}</p>
        )}
        <div className="flex flex-wrap gap-2 mt-2">
          {experience.skills.map((skill, i) => (
            <Badge key={i} variant="secondary">{skill}</Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-foreground/70 text-sm mb-2">
          <Briefcase size={16} className="mr-2" />
          <span>{experience.company}</span>
        </div>
        <div className="flex items-center text-foreground/70 text-sm mb-2">
          <MapPin size={16} className="mr-2" />
          <span>{experience.location}</span>
        </div>
        <div className="flex items-center text-foreground/70 text-sm mb-4">
          <Calendar size={16} className="mr-2" />
          <span>{experience.period}</span>
        </div>
        
        <ul className="space-y-3">
          {experience.description.map((item, i) => (
            <li key={i} className="text-foreground/80 text-sm flex">
              <span className="text-primary mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 font-serif">Work <span className="text-primary">Experience</span></h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-foreground/80">
            My professional journey and roles that have shaped my career in the software development industry.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
