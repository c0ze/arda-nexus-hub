import { Card } from "@/components/ui/card";
import { Code2, Globe, Lightbulb } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Technical Excellence",
      description: "Proficient in Ruby, Go, Python, and modern web technologies. Hands-on with AWS, Kubernetes, and microservices.",
    },
    {
      icon: Globe,
      title: "Multilingual",
      description: "Native Turkish speaker with near-native English and business-level Japanese proficiency.",
    },
    {
      icon: Lightbulb,
      title: "Pragmatic Approach",
      description: "Early adopter of CI/CD, TDD, and Agile methodologies. Always exploring new frameworks and ideas.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A pragmatic programmer who enjoys tinkering, hacking, and exploring new languages and frameworks.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-card border border-border rounded-lg p-8 shadow-soft space-y-4">
          <p className="text-foreground leading-relaxed">
            I've been living in <span className="font-semibold text-primary">Japan since 2004</span>, where I earned my Master's degree in Computer Science from <span className="font-semibold">Keio University</span> (2006-2008). I also pursued PhD studies in Embedded Processor Design and Optimization from 2008-2011.
          </p>
          <p className="text-foreground leading-relaxed">
            With over <span className="font-semibold text-primary">20 years of professional experience</span>, I've worked across the full technology stack - from embedded systems to cloud architecture. Currently serving as a Systems Architect at Veltra since 2024, I specialize in migrating monolithic applications to microservices and building scalable infrastructure solutions.
          </p>
          <p className="text-foreground leading-relaxed">
            My journey has taken me through various roles at companies like Gaussy, Robotfund, and Mobilous, always focusing on pragmatic solutions and continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="p-6 space-y-4 hover:shadow-medium transition-smooth bg-card border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
