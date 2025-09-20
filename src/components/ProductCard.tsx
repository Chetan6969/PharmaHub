import { ShoppingCart, Calendar, Clock, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onBuyNow: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart, onBuyNow }: ProductCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const isExpiringSoon = () => {
    const expiryDate = new Date(product.expiryDate);
    const today = new Date();
    const diffTime = expiryDate.getTime() - today.getTime();
    const diffMonths = diffTime / (1000 * 60 * 60 * 24 * 30);
    return diffMonths <= 6; // Less than 6 months to expiry
  };

  return (
    <Card className="group hover:shadow-card transition-all duration-300 hover:scale-105 bg-gradient-card border-border/50 overflow-hidden">
      {/* Product Image */}
      <div className="relative overflow-hidden bg-background-secondary p-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain group-hover:scale-110 transition-transform duration-300"
        />
        <Badge 
          variant={isExpiringSoon() ? "destructive" : "secondary"}
          className="absolute top-2 right-2"
        >
          {product.category}
        </Badge>
        {isExpiringSoon() && (
          <Badge variant="destructive" className="absolute top-2 left-2">
            Expires Soon
          </Badge>
        )}
      </div>

      <CardContent className="p-6 space-y-4">
        {/* Product Name & Price */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg text-foreground leading-tight">{product.name}</h3>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-primary">₹{product.price}</span>
            <Badge variant="outline" className="text-muted-foreground">
              <Info className="h-3 w-3 mr-1" />
              In Stock
            </Badge>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed">
          {product.description}
        </p>

        {/* Dates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Calendar className="h-4 w-4 text-primary flex-shrink-0" />
            <div>
              <p className="font-medium">Mfg Date</p>
              <p className="text-xs sm:text-sm">{formatDate(product.buildDate)}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Clock className="h-4 w-4 text-destructive flex-shrink-0" />
            <div>
              <p className="font-medium">Exp Date</p>
              <p className={`text-xs sm:text-sm ${isExpiringSoon() ? 'text-destructive font-medium' : ''}`}>
                {formatDate(product.expiryDate)}
              </p>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 space-y-3">
        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 w-full">
          <Button 
            variant="outline" 
            className="flex items-center justify-center space-x-2 hover:bg-primary hover:text-primary-foreground transition-all border-border hover:border-primary"
            onClick={() => onAddToCart(product)}
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Add to Cart</span>
            <span className="sm:hidden">Add</span>
          </Button>
          <Button 
            className="bg-gradient-button hover:shadow-button transition-all font-semibold border-0"
            onClick={() => onBuyNow(product)}
          >
            Buy Now
          </Button>
        </div>

        {/* Additional Info */}
        <div className="flex items-center justify-center space-x-4 text-xs text-muted-foreground pt-2 border-t border-border/50">
          <span>✓ Authentic Product</span>
          <span>✓ Fast Delivery</span>
          <span>✓ Easy Returns</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;