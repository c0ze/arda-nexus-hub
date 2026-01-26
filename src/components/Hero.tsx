import { User, BookOpen, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col bg-background">
      {/* Header with theme toggle */}
      <header className="w-full px-6 py-4 flex justify-end">
        <ThemeToggle />
      </header>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl mx-auto text-center space-y-10 animate-fade-in">
          {/* Name and title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground">
              Arda Karaduman
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Systems Architect & Pragmatic Programmer
            </p>
            <p className="text-base text-muted-foreground/80 flex items-center justify-center gap-2">
              Tokyo, Japan
            </p>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-foreground/70 max-w-lg mx-auto leading-relaxed">
            Building scalable systems and exploring new technologies.
            Living in Japan since 2004.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button
              variant="outline"
              size="lg"
              className="gap-2 px-6"
              asChild
            >
              <a href="https://resume.arda.tr" target="_blank" rel="noopener noreferrer">
                <User className="w-4 h-4" />
                Resume
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 px-6"
              asChild
            >
              <a href="https://blog.arda.tr" target="_blank" rel="noopener noreferrer">
                <BookOpen className="w-4 h-4" />
                Blog
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 px-6"
              asChild
            >
              <a href="https://ai.arda.tr" target="_blank" rel="noopener noreferrer">
                <Bot className="w-4 h-4" />
                AI Chat
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
