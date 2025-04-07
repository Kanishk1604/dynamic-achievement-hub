
import { Card, CardContent } from "@/components/ui/card";
import { Award, Star, Medal } from "lucide-react";

const achievements = [
  {
    title: "President's Honour Roll",
    description: "Recognized for academic excellence.",
    icon: <Star className="h-10 w-10 text-yellow-500" />,
  },
  {
    title: "Honorable mention and 35th Rank in ICPC Coding Competition ",
    description: "Achieved 35th rank in the ICPC coding competition (2023) representing University of Windsor across Ontario, CA.",
    icon: <Medal className="h-10 w-10 text-primary" />,
    link: "https://drive.google.com/file/d/18qDlDNkJTb4UvCmOC5TuDQCoOFAKR3KE/view"
  },
  {
    title: "NASA Space Apps Challenge",
    liveDemo: "https://space-cosmic-clock.vercel.app/",
    description: "Recognized for innovative problem-solving in NASA Space Apps Challenge (2024).",
    icon: <Award className="h-10 w-10 text-blue-500" />,
    link: "https://drive.google.com/file/d/1myYDu-RkEzbNewbMmw2tbmHaupb0h4gJ/view"
  },
  {
    title: "Google IT Support Fundamentals",
    description: "Completed Google IT Support Fundamentals Course Certificate.",
    icon: <Star className="h-10 w-10 text-green-500" />,
    link: "https://www.coursera.org/account/accomplishments/certificate/ULXC987NUSW2"
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
    <a
      key={index}
      href={achievement.link}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-[1.02] transition-transform duration-200"
    >
      <Card className="text-center h-full">
        <CardContent className="pt-8 pb-6 px-4 flex flex-col items-center">
          <div className="mb-4 p-4 rounded-full bg-muted">
            {achievement.icon}
          </div>
          <h3 className="text-lg font-semibold mb-2 font-serif">{achievement.title}</h3>
          <p className="text-sm text-foreground/80">{achievement.description}</p>
        </CardContent>
      </Card>
    </a>
  ))}
</div>

      </div>
    </section>
  );
};

export default Achievements;
