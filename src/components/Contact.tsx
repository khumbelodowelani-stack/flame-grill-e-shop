import { MessageCircle, Facebook, Instagram, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-handwritten text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions? Want to place an order? We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* WhatsApp */}
          <Card className="border-border hover:border-primary transition-all hover:shadow-flame-glow">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-handwritten mb-2">WhatsApp</h3>
              <p className="text-muted-foreground mb-4">081 368 0327</p>
              <Button
                onClick={() => window.open("https://wa.me/27813680327", "_blank")}
                className="bg-primary hover:bg-primary/90 w-full"
              >
                Chat Now
              </Button>
            </CardContent>
          </Card>

          {/* Facebook */}
          <Card className="border-border hover:border-primary transition-all hover:shadow-flame-glow">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Facebook className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-handwritten mb-2">Facebook</h3>
              <p className="text-muted-foreground mb-4 text-sm">Fiki's Flame Grill & Pizza</p>
              <Button
                onClick={() =>
                  window.open("https://www.facebook.com/Fikisflamegrill", "_blank")
                }
                variant="outline"
                className="w-full hover:border-primary hover:text-primary"
              >
                Follow Us
              </Button>
            </CardContent>
          </Card>

          {/* Instagram */}
          <Card className="border-border hover:border-primary transition-all hover:shadow-flame-glow">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Instagram className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-handwritten mb-2">Instagram</h3>
              <p className="text-muted-foreground mb-4">@fikis_flame_grill</p>
              <Button
                onClick={() =>
                  window.open("https://www.instagram.com/fikis_flame_grill", "_blank")
                }
                variant="outline"
                className="w-full hover:border-primary hover:text-primary"
              >
                Follow Us
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Address */}
        <Card className="max-w-2xl mx-auto mt-8 border-border">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-handwritten mb-2">Visit Us</h3>
                <p className="text-muted-foreground">
                  49 Aloe Crescent, Joosterhof, Kuilsrivier
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Northern Suburbs, Cape Town
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
