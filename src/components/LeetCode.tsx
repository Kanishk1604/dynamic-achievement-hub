
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Trophy } from "lucide-react";

const LeetCode = () => {
  return (
    <section id="leetcode" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 font-serif">Competitive <span className="text-primary">Coding</span></h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-foreground/80">
            Showcasing my problem-solving skills through algorithmic challenges and competitive programming.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="hover-scale">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                <div className="bg-orange-100 dark:bg-orange-950/30 p-4 rounded-full">
                  <Code size={40} className="text-orange-500" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold font-serif mb-2">LeetCode Profile</h3>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-3">
                    <Badge variant="secondary">Data Structures</Badge>
                    <Badge variant="secondary">Algorithms</Badge>
                    <Badge variant="secondary">Problem Solving</Badge>
                  </div>
                  <Button asChild>
                    <a 
                      href="https://leetcode.com/u/kanishkknot/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
                      View Profile
                    </a>
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-background/50 dark:bg-background/20 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary mb-1">120+</div>
                  <div className="text-sm text-foreground/70">Problems Solved</div>
                </div>
                <div className="bg-background/50 dark:bg-background/20 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary mb-1">3</div>
                  <div className="text-sm text-foreground/70">Coding Contests</div>
                </div>
                <div className="bg-background/50 dark:bg-background/20 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary mb-1">Top 15%</div>
                  <div className="text-sm text-foreground/70">Global Ranking</div>
                </div>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <Trophy size={20} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Solved over 120 problems focusing on data structures, algorithms, and problem-solving techniques</span>
                </li>
                <li className="flex items-start">
                  <Trophy size={20} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Consistently tackled medium and hard difficulty problems to strengthen analytical thinking and optimization skills</span>
                </li>
                <li className="flex items-start">
                  <Trophy size={20} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Implemented efficient solutions to complex problems using dynamic programming, graph algorithms, and advanced data structures</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeetCode;
