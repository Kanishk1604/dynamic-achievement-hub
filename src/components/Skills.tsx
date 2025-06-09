
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code2, Database, Layout, Server, Terminal, LineChart, Users } from "lucide-react";

const SkillItem = ({ name, level }: { name: string; level: number }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(level);
    }, 100);

    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-primary font-medium">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const categories = [
    {
      id: "languages",
      name: "Languages",
      icon: <Code2 className="h-5 w-5" />,
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "C/C++", level: 80 },
        { name: "Java", level: 75 },
        { name: "HTML/CSS", level: 95 }
      ]
    },
    {
      id: "databases",
      name: "Databases",
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "SQLite", level: 75 }
      ]
    },
    {
      id: "backend",
      name: "Backend",
      icon: <Server className="h-5 w-5" />,
      skills: [
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 80 },
        { name: "Microservices", level: 75 },
        { name: "Serverless Architecture", level: 70 }
      ]
    },
    {
      id: "frameworks",
      name: "Frameworks",
      icon: <Layout className="h-5 w-5" />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Angular", level: 75 },
        { name: "React Native", level: 70 },
        { name: "Scrum", level: 80 }
      ]
    },
    {
      id: "tools",
      name: "Tools",
      icon: <Terminal className="h-5 w-5" />,
      skills: [
        { name: "Git", level: 95 },
        { name: "Docker", level: 85 },
        { name: "Google Cloud Platform", level: 80 },
        { name: "VS Code", level: 95 },
        { name: "WSL", level: 85 },
        { name: "Eclipse", level: 80 },
        { name: "Visual Studio", level: 85 }
      ]
    },
    {
      id: "soft-skills",
      name: "Soft Skills",
      icon: <Users className="h-5 w-5" />,
      skills: [
        { name: "Team Leadership", level: 85 },
        { name: "Agile Methodologies", level: 90 },
        { name: "Problem Solving", level: 95 },
        { name: "Communication", level: 90 },
        { name: "Time Management", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 font-serif">Technical <span className="text-primary">Skills</span></h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-foreground/80">
            A comprehensive overview of my technical expertise and proficiency across
            various programming languages, frameworks, tools, and soft skills.
          </p>
        </div>

        <Tabs defaultValue="languages" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  {category.icon}
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                      {category.icon}
                      {category.name}
                    </h3>
                    <div>
                      {category.skills.slice(0, Math.ceil(category.skills.length / 2)).map((skill, index) => (
                        <SkillItem key={index} name={skill.name} level={skill.level} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                      {category.icon}
                      {category.name} (continued)
                    </h3>
                    <div>
                      {category.skills.slice(Math.ceil(category.skills.length / 2)).map((skill, index) => (
                        <SkillItem key={index} name={skill.name} level={skill.level} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
