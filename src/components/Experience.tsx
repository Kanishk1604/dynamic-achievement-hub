
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Web Developer",
    company: "University of Windsor",
    location: "Windsor, CA",
    period: "Sep 2023 - Dec 2023",
    description: [
      "Modified and improved CSS and JavaScript to enhance the official future.uwindsor.ca website's design, layout, and responsiveness by 30%.",
      "Developed responsive web applications using React.js, enhancing UI/UX by 30%.",
      "Implemented REST APIs and optimized frontend performance, reducing load times by 40%."
    ],
    skills: ["JavaScript", "HTML", "CSS", "WordPress", "React"]
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
    location: "Windsor, CA",
    period: "Sep 2022 - Present",
    description: [
      "Assisted in teaching and grading for courses: Theoretical Fundamentals of Computer Science under Dr.Tsin, Computer Graphics with C++, and Key Concepts of Computer Science to assist over 300+ students."
    ],
    skills: ["C++", "Java", "Discrete Mathematics", "WSL"]
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
