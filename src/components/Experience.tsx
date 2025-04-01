
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Web Development Intern",
    company: "University of Windsor",
    location: "Windsor, CA",
    period: "Sep 2023 - Dec 2023",
    description: [
      "Modified and improved CSS and JavaScript to enhance the official future.uwindsor.ca website's design, layout, and responsiveness by 30%.",
      "Developed responsive web applications using React.js, enhancing UI/UX by 30%.",
      "Implemented REST APIs and optimized frontend performance, reducing load times by 40%."
    ]
  },
  {
    title: "Research Assistant",
    subtitle: "Supervised under Dr. Asish Mukhopadhyay",
    company: "University of Windsor",
    location: "Windsor, CA",
    period: "Sep 2024 - Apr 2025",
    description: [
      "Developed a Python simulation tool that generates uniformly random outerplanar graphs with up to 12 vertices, accurately reproducing complex block–cutvertex structures with an average of 3 distinct cut–vertices per graph.",
      "Engineered a recursive decomposition framework implementing 3 core procedures (OPGGEN, OPGGENONE, and OPGGENTWO) that, in simulation tests, produced over 1,000 unique graph instances in under 5 seconds on standard hardware.",
      "Implemented precise probability sampling techniques based on Schroeder and Catalan numbers, achieving 100% fidelity in forced-sample simulations that mirror theoretical models."
      ,"Bridged advanced combinatorial research and practical software development by translating intricate pseudocode into a fully functional tool—enhancing both algorithmic understanding and interactive graph visualization capabilities."
    ]
  },
  {
    title: "Teaching Assistant",
    company: "University of Windsor",
    location: "Windsor, CA",
    period: "Sep 2022 - Present",
    description: [
      "Assisted in teaching and grading for courses: Theoretical Fundamentals of Computer Science under Dr.Tsin, Computer Graphics with C++, and Key Concepts of Computer Science to assist over 300+ students."
    ]
  }

];

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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

        <div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8" 
          ref={containerRef}
        >
          {experiences.map((exp, index) => (
            <Card key={index} className="hover-scale relative">
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-full rounded-tr-lg"></div>
              <CardHeader>
                <CardTitle className="font-serif">{exp.title}</CardTitle>
                {exp.subtitle && (
                  <p className="text-primary/90 text-sm font-medium mt-1">{exp.subtitle}</p>
                )}
                <div className="flex items-center text-foreground/70 text-sm mt-2">
                  <Briefcase size={16} className="mr-2" />
                  <span>{exp.company}</span>
                </div>
                <div className="flex items-center text-foreground/70 text-sm mt-1">
                  <MapPin size={16} className="mr-2" />
                  <span>{exp.location}</span>
                </div>
                <div className="flex items-center text-primary text-sm mt-1">
                  <Calendar size={16} className="mr-2" />
                  <span>{exp.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-foreground/80 text-sm flex">
                      <span className="text-primary mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
