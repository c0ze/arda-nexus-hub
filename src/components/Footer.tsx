import { Github, Mail, Linkedin, Guitar } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-gradient-subtle border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Arda Karaduman. All rights reserved.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/c0ze"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-smooth flex items-center justify-center"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ardakaraduman/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-smooth flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:arda@karaduman.org"
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-smooth flex items-center justify-center"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://pagan.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-smooth flex items-center justify-center"
              aria-label="Pagan"
            >
              <Guitar className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
