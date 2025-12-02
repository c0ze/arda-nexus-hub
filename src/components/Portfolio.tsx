import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "Domino Game",
      description: "A classic Domino game built with Love2D and Lua. Play against the computer in this web-based version.",
      image: "/placeholder.svg",
      link: "https://coz3-domino.netlify.app/",
      tags: ["Lua", "Love2D", "Game Dev"],
      playable: true,
    },
    {
      title: "Coming Soon",
      description: "Another exciting game project is currently in development. Stay tuned for updates!",
      image: "/placeholder.svg",
      link: "#",
      tags: ["Coming Soon"],
      playable: false,
    },
    {
      title: "Coming Soon",
      description: "A third game project will be showcased here. More details to be announced.",
      image: "/placeholder.svg",
      link: "#",
      tags: ["Coming Soon"],
      playable: false,
    },
  ];

  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Game Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of games and interactive experiences I've built.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm group">
              <div className="aspect-video w-full overflow-hidden bg-muted relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {project.playable && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="secondary" className="gap-2" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Gamepad2 className="w-4 h-4" />
                        Play Now
                      </a>
                    </Button>
                  </div>
                )}
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  {project.playable && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
