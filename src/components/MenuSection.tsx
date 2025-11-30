import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { menuData, categories } from "@/data/menuData";
import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";

export const MenuSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredItems =
    selectedCategory === "All"
      ? menuData
      : menuData.filter((item) => item.category === selectedCategory);

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Flame className="h-4 w-4" />
            <span className="text-sm font-medium">Our Menu</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-handwritten text-foreground mb-4">
            Flame-Grilled Favorites
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            All our dishes are prepared with love and grilled to perfection
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button
            variant={selectedCategory === "All" ? "default" : "outline"}
            onClick={() => setSelectedCategory("All")}
            className={
              selectedCategory === "All"
                ? "bg-primary hover:bg-primary/90"
                : "hover:border-primary hover:text-primary"
            }
          >
            All Items
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-primary hover:bg-primary/90"
                  : "hover:border-primary hover:text-primary"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
