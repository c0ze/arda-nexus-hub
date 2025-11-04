import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-subtle px-6 py-12">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            Arda Karaduman
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Systems Architect & Pragmatic Programmer
          </p>
          <p className="text-lg text-muted-foreground flex items-center justify-center gap-2">
            <span className="text-2xl">🇯🇵</span>
            Tokyo, Japan
          </p>
        </div>

        <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
          Building scalable systems and exploring new technologies. 
          Living in Japan since 2004.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            variant="default"
            size="lg"
            className="group gap-2 shadow-medium hover:shadow-soft transition-smooth"
            asChild
          >
            <a href="https://resume.arda.tr" target="_blank" rel="noopener noreferrer">
              View Resume
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="group gap-2 border-2 transition-smooth"
            asChild
          >
            <a href="https://blog.arda.tr" target="_blank" rel="noopener noreferrer">
              Read Blog
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
