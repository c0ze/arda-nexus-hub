import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Palette } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const themes = [
  { id: "dracula-pro", name: "Dracula Pro", color: "#9580FF" },
  { id: "alucard", name: "Alucard", color: "#644AC9" },
  { id: "blade", name: "Blade", color: "#80FFEA" },
  { id: "buffy", name: "Buffy", color: "#FF80BF" },
  { id: "lincoln", name: "Lincoln", color: "#FFFF80" },
  { id: "morbius", name: "Morbius", color: "#FF9580" },
  { id: "van-helsing", name: "Van Helsing", color: "#708CA9" },
] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="flex items-center justify-center w-9 h-9 rounded-full bg-secondary border border-border text-muted-foreground"
        aria-label="Toggle theme"
      >
        <Palette className="w-4 h-4" />
      </button>
    );
  }

  const currentTheme = themes.find((t) => t.id === theme) || themes[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center justify-center w-9 h-9 rounded-full bg-secondary border border-border text-muted-foreground hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all"
          aria-label="Toggle theme"
          title={`Theme: ${currentTheme.name}`}
        >
          <div
            className="w-4 h-4 rounded-full border border-current"
            style={{ backgroundColor: currentTheme.color }}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {themes.map((t) => (
          <DropdownMenuItem
            key={t.id}
            onClick={() => setTheme(t.id)}
            className={`flex items-center gap-3 cursor-pointer ${
              theme === t.id ? "bg-primary/10 text-primary" : ""
            }`}
          >
            <div
              className="w-4 h-4 rounded-full border border-border"
              style={{ backgroundColor: t.color }}
            />
            <span>{t.name}</span>
            {theme === t.id && (
              <span className="ml-auto text-xs text-primary">Active</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
