
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="w-full h-[400px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-xl">
                <div className="absolute inset-0 -translate-x-4 -translate-y-4 border-2 border-primary rounded-lg"></div>
                <div className="h-full flex items-center justify-center text-white text-center p-8">
                  <div>
                    <p className="text-xl font-medium mb-4">University of Windsor</p>
                    <p className="text-2xl font-bold mb-2 font-serif">Bachelor of Science Honours</p>
                    <p className="mb-4">Computer Science with Software Engineering Specialization</p>
                    <p className="font-bold text-xl">CGPA: 87.1%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-2 font-serif">About <span className="text-primary">Me</span></h2>
            <div className="h-1 w-20 bg-primary mb-6"></div>
            
            <p className="text-foreground/80 mb-6">
              I'm a passionate software engineer with expertise in full-stack development. 
              Currently based in Windsor, CA, I'm focused on creating efficient, user-friendly 
              applications using modern technologies.
            </p>
            
            <p className="text-foreground/80 mb-6">
              With a strong foundation in computer science and hands-on experience in web 
              development, I continually seek to expand my knowledge and skills in the ever-evolving 
              tech landscape.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <Card className="hover-scale">
                <CardContent className="p-4 flex items-start">
                  <CheckCircle className="text-primary mr-3 flex-shrink-0 mt-1" size={18} />
                  <div>
                    <h3 className="font-semibold mb-1">Full-Stack Development</h3>
                    <p className="text-sm text-foreground/70">Building end-to-end applications</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover-scale">
                <CardContent className="p-4 flex items-start">
                  <CheckCircle className="text-primary mr-3 flex-shrink-0 mt-1" size={18} />
                  <div>
                    <h3 className="font-semibold mb-1">UI/UX Design</h3>
                    <p className="text-sm text-foreground/70">Creating intuitive user experiences</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover-scale">
                <CardContent className="p-4 flex items-start">
                  <CheckCircle className="text-primary mr-3 flex-shrink-0 mt-1" size={18} />
                  <div>
                    <h3 className="font-semibold mb-1">API Development</h3>
                    <p className="text-sm text-foreground/70">Building efficient backend services</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover-scale">
                <CardContent className="p-4 flex items-start">
                  <CheckCircle className="text-primary mr-3 flex-shrink-0 mt-1" size={18} />
                  <div>
                    <h3 className="font-semibold mb-1">Team Leadership</h3>
                    <p className="text-sm text-foreground/70">Managing projects and teams</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
