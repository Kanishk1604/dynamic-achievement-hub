
import { Card, CardContent } from "@/components/ui/card";
import { Award, Star, Medal } from "lucide-react";

const achievements = [
  {
    title: "President's Honour Roll",
    description: "Recognized for academic excellence.",
    icon: <Star className="h-10 w-10 text-yellow-500" />
  },
  {
    title: "36th Rank in ICPC Coding Competition",
    description: "Achieved 36th rank in the ICPC coding competition (2023) across Ontario, CA.",
    icon: <Medal className="h-10 w-10 text-primary" />
  },
  {
    title: "NASA Space Apps Challenge",
    description: "Recognized for innovative problem-solving in NASA Space Apps Challenge (2024).",
    icon: <Award className="h-10 w-10 text-blue-500" />
  },
  {
    title: "Google IT Support Fundamentals",
    description: "Completed Google IT Support Fundamentals Course Certificate.",
    icon: <Star className="h-10 w-10 text-green-500" />
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 font-serif">Awards & <span className="text-primary">Achievements</span></h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-foreground/80">
            A collection of my academic and professional recognitions, certificates, and accomplishments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center hover-scale">
              <CardContent className="pt-8 pb-6 px-4 flex flex-col items-center">
                <div className="mb-4 p-4 rounded-full bg-muted">
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 font-serif">{achievement.title}</h3>
                <p className="text-sm text-foreground/80">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
