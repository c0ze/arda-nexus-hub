import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "Domino Game",
      description: "A classic Domino game built with Love2D and Lua. Play against the computer in this web-based version.",
      image: "/domino.png",
      link: "https://coz3-domino.netlify.app/",
      tags: ["Lua", "Love2D", "Game Dev"],
      playable: true,
    },
    {
      title: "Hackerman",
      description: "Dive into the digital realm with this hacking simulation. Test your skills and breach the system.",
      image: "/hackerman.png",
      link: "https://coz3-hackerman.netlify.app/",
      tags: ["Simulation", "Puzzle", "Web Game"],
      playable: true,
    },
    {
      title: "Commando",
      description: "A retro-style action game. Take control and fight your way through enemy lines.",
      image: "/commando.png",
      link: "https://coz3-commando.netlify.app/",
      tags: ["Action", "Retro", "Web Game"],
      playable: true,
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
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-pointer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </a>
                {project.playable && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <Button variant="secondary" className="gap-2 pointer-events-auto" asChild>
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

        <div className="text-center space-y-4 pt-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Utilities and tools I've developed to improve workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Git Roast",
              description: "A CLI tool that roasts your git commits. Make your version control a little more entertaining.",
              image: "/git-roast.png",
              link: "https://github.com/c0ze/git-roast",
              tags: ["CLI", "Go", "Tool"],
              playable: false,
            }
          ].map((tool, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm group">
              <div className="aspect-video w-full overflow-hidden bg-muted relative">
                <a href={tool.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-pointer">
                  <img
                    src={tool.image}
                    alt={tool.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </a>
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-2">
                  {tool.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <CardTitle className="flex items-center justify-between">
                  {tool.title}
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {tool.description}
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
