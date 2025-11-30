import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface CartProps {
  open: boolean;
  onClose: () => void;
}

export const Cart = ({ open, onClose }: CartProps) => {
  const { items, updateQuantity, removeItem, total, clearCart } = useCart();

  const handleWhatsAppOrder = () => {
    const orderMessage = items
      .map(
        (item) =>
          `${item.name} ${item.size ? `(${item.size})` : ""} x${item.quantity} - R${
            item.price * item.quantity
          }`
      )
      .join("\n");

    const message = `Hi! I'd like to order:\n\n${orderMessage}\n\nTotal: R${total}`;
    const whatsappUrl = `https://wa.me/27813680327?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="text-2xl font-handwritten">Your Order</SheetTitle>
          <SheetDescription>
            Review your items before placing your order
          </SheetDescription>
        </SheetHeader>

        <div className="mt-8 flex flex-col h-[calc(100vh-200px)]">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
              <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Your cart is empty</p>
              <Button onClick={onClose} className="mt-4 bg-primary hover:bg-primary/90">
                Browse Menu
              </Button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-auto space-y-4 pr-2">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 bg-muted rounded-lg border border-border"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{item.name}</h3>
                      {item.size && (
                        <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                      )}
                      <p className="text-sm font-bold text-primary mt-1">R{item.price}</p>
                    </div>

                    <div className="flex flex-col items-end justify-between">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.id)}
                        className="h-6 w-6 text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>

                      <div className="flex items-center gap-2 border border-border rounded-lg">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 hover:text-primary"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 hover:text-primary"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 mt-4 space-y-4">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total:</span>
                  <span className="text-primary">R{total}</span>
                </div>

                <Button
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg"
                  size="lg"
                >
                  Order via WhatsApp
                </Button>

                <Button
                  onClick={() => {
                    // Placeholder for online ordering functionality
                    alert("Online ordering coming soon! For now, please use WhatsApp.");
                  }}
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  size="lg"
                >
                  Order Online
                </Button>

                <Button
                  onClick={clearCart}
                  variant="outline"
                  className="w-full hover:border-destructive hover:text-destructive"
                >
                  Clear Cart
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
