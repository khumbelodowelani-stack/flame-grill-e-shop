import { useState } from "react";
import { Plus, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { MenuItem, categoryImages } from "@/data/menuData";

// Import product images
import pizzaImg from "@/assets/products/pizza.jpg";
import ribsImg from "@/assets/products/ribs.jpg";
import burgerImg from "@/assets/products/burger.jpg";
import wingsImg from "@/assets/products/wings.jpg";
import gatsbyImg from "@/assets/products/gatsby.jpg";
import mixedGrillImg from "@/assets/products/mixed-grill.jpg";
import margheritaImg from "@/assets/products/margherita.jpg";
import salamiImg from "@/assets/products/salami.jpg";
import chickenPizzaImg from "@/assets/products/chicken-pizza.jpg";
import tikkaChickenImg from "@/assets/products/tikka-chicken.jpg";
import butterChickenImg from "@/assets/products/butter-chicken.jpg";
import beefBurgerImg from "@/assets/products/beef-burger.jpg";
import smashBurgerImg from "@/assets/products/smash-burger.jpg";
import chickenMayoImg from "@/assets/products/chicken-mayo.jpg";
import steakSandwichImg from "@/assets/products/steak-sandwich.jpg";
import viennaImg from "@/assets/products/vienna.jpg";
import boerieImg from "@/assets/products/boerie.jpg";
import hotdogImg from "@/assets/products/hotdog.jpg";
import periWingsImg from "@/assets/products/peri-wings.jpg";
import tboneImg from "@/assets/products/tbone.jpg";
import ribsChipsImg from "@/assets/products/ribs-chips.jpg";
import chickenGatsbyImg from "@/assets/products/chicken-gatsby.jpg";
import steakGatsbyImg from "@/assets/products/steak-gatsby.jpg";
import polonyGatsbyImg from "@/assets/products/polony-gatsby.jpg";

const imageMap: Record<string, string> = {
  pizza: pizzaImg,
  ribs: ribsImg,
  burger: burgerImg,
  wings: wingsImg,
  gatsby: gatsbyImg,
  "mixed-grill": mixedGrillImg,
  margherita: margheritaImg,
  salami: salamiImg,
  "chicken-pizza": chickenPizzaImg,
  "tikka-chicken": tikkaChickenImg,
  "butter-chicken": butterChickenImg,
  "beef-burger": beefBurgerImg,
  "smash-burger": smashBurgerImg,
  "chicken-mayo": chickenMayoImg,
  "steak-sandwich": steakSandwichImg,
  vienna: viennaImg,
  boerie: boerieImg,
  hotdog: hotdogImg,
  "peri-wings": periWingsImg,
  tbone: tboneImg,
  "ribs-chips": ribsChipsImg,
  "chicken-gatsby": chickenGatsbyImg,
  "steak-gatsby": steakGatsbyImg,
  "polony-gatsby": polonyGatsbyImg,
};

interface ProductCardProps {
  item: MenuItem;
}

export const ProductCard = ({ item }: ProductCardProps) => {
  const { addItem } = useCart();
  const [selectedPrice, setSelectedPrice] = useState(item.prices[0]);

  const handleAddToCart = () => {
    addItem({
      id: `${item.id}-${selectedPrice.size}`,
      name: item.name,
      price: selectedPrice.price,
      size: selectedPrice.size,
    });
  };

  // Get the image - use item's specific image or fallback to category image
  const productImage = item.image 
    ? imageMap[item.image] || imageMap.pizza
    : imageMap[categoryImages[item.category]] || imageMap.pizza;

  return (
    <Card className="group overflow-hidden border-border hover:border-primary transition-all duration-300 hover:shadow-flame-glow">
      {/* Product Image */}
      {productImage && (
        <div className="relative h-48 overflow-hidden bg-muted">
          <img
            src={productImage}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      
      <CardContent className="p-6">
        <div className="flex flex-col h-full">
          <div className="mb-4">
            <h3 className="text-xl font-handwritten text-foreground mb-2 group-hover:text-primary transition-colors">
              {item.name}
            </h3>
            {item.description && (
              <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
            )}
            <div className="flex items-center gap-2 text-primary">
              <Flame className="h-4 w-4" />
              <span className="text-xs font-medium">{item.category}</span>
            </div>
          </div>

          <div className="mt-auto">
            {item.prices.length > 1 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {item.prices.map((priceOption) => (
                  <Button
                    key={priceOption.size}
                    variant={selectedPrice.size === priceOption.size ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedPrice(priceOption)}
                    className={
                      selectedPrice.size === priceOption.size
                        ? "bg-primary hover:bg-primary/90"
                        : "hover:border-primary hover:text-primary"
                    }
                  >
                    {priceOption.size}
                  </Button>
                ))}
              </div>
            )}

            <div className="flex items-center justify-between">
              <div>
                <span className="text-2xl font-bold text-foreground">R{selectedPrice.price}</span>
                {selectedPrice.size && item.prices.length > 1 && (
                  <span className="text-sm text-muted-foreground ml-2">({selectedPrice.size})</span>
                )}
              </div>
              <Button
                onClick={handleAddToCart}
                size="icon"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-flame-glow hover:scale-110 transition-all"
              >
                <Plus className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
