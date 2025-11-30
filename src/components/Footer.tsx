import { Flame } from "lucide-react";
import logo from "@/assets/logo.jpeg";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Fiki's" className="h-12 w-12 object-contain" />
              <div>
                <h3 className="text-2xl font-handwritten">Fiki's</h3>
                <p className="text-sm opacity-80">Flame Grill & Pizza</p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Where you find the best Ribs & Pizza in the Northern Suburbs
            </p>
          </div>

          <div>
            <h4 className="font-handwritten text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <button
                  onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-primary transition-colors"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-handwritten text-xl mb-4">Available Sauces</h4>
            <ul className="text-sm opacity-80 grid grid-cols-2 gap-2">
              <li>• Tomato</li>
              <li>• Jalapeno</li>
              <li>• Chutney</li>
              <li>• BBQ</li>
              <li>• Sweet Chilli</li>
              <li>• Dhayna</li>
              <li>• Perinaise</li>
              <li>• Sriracha</li>
              <li>• Mustard</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} Fiki's Flame Grill & Pizza. All rights reserved.</p>
          <div className="flex items-center justify-center gap-2 mt-2 text-primary">
            <Flame className="h-4 w-4" />
            <span>Grilled with love</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
