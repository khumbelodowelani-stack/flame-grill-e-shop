import { useState } from "react";
import { Plus, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { MenuItem } from "@/data/menuData";

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

  return (
    <Card className="group overflow-hidden border-border hover:border-primary transition-all duration-300 hover:shadow-flame-glow">
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
