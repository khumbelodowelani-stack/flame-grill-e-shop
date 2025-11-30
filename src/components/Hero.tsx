import { Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToMenu = () => {
    const element = document.getElementById("menu");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted to-background py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmOTczMTYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMiAyLTQgNC00czQgMiA0IDQtMiA0LTQgNEgzNlYxNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-in fade-in slide-in-from-top duration-500">
            <Flame className="h-4 w-4" />
            <span className="text-sm font-medium">Wood-Fired Excellence</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-handwritten text-foreground mb-6 animate-in fade-in slide-in-from-bottom duration-700 delay-100">
            Where you find the best{" "}
            <span className="text-primary relative inline-block">
              Ribs & Pizza
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,0 100,5 T200,5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            in the Northern Suburbs
          </p>
          
          <Button 
            onClick={scrollToMenu}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-flame-glow hover:shadow-xl transition-all hover:scale-105 animate-in fade-in slide-in-from-bottom duration-700 delay-300"
          >
            <Flame className="mr-2 h-5 w-5" />
            Order Now
          </Button>
        </div>
      </div>
    </section>
  );
};
