import { useState } from "react";
import { Search as SearchIcon, Filter, Leaf, DollarSign } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const mockProducts = [
  {
    id: 1,
    name: "Organic Bananas",
    price: "$2.99",
    originalPrice: "$3.49",
    store: "GreenMart",
    savings: "14%",
    isEco: true,
    image: "🍌"
  },
  {
    id: 2,
    name: "Whole Wheat Bread",
    price: "$1.89",
    originalPrice: "$2.29",
    store: "FreshCo",
    savings: "17%",
    isEco: false,
    image: "🍞"
  },
  {
    id: 3,
    name: "Free-Range Eggs",
    price: "$4.99",
    originalPrice: "$5.99",
    store: "Natural Foods",
    savings: "17%",
    isEco: true,
    image: "🥚"
  }
];

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="pt-4">
        <h1 className="text-2xl font-bold text-foreground mb-2">Product Search</h1>
        <p className="text-muted-foreground">Compare prices and find eco-friendly alternatives</p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Filter Toggle */}
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2"
        >
          <Filter className="h-4 w-4" />
          Filters
        </Button>
        <div className="flex gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <DollarSign className="h-3 w-3" />
            Best Price
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1 border-eco text-eco">
            <Leaf className="h-3 w-3" />
            Eco-Friendly
          </Badge>
        </div>
      </div>

      {/* Product Results */}
      <div className="space-y-3">
        <h3 className="font-semibold text-foreground">Results ({mockProducts.length})</h3>
        {mockProducts.map((product) => (
          <Card key={product.id} className="shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="text-3xl">{product.image}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-foreground truncate">{product.name}</h4>
                    {product.isEco && (
                      <Badge className="ml-2 bg-eco text-eco-foreground">
                        <Leaf className="h-3 w-3 mr-1" />
                        Eco
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{product.store}</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-primary">{product.price}</span>
                      <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                    </div>
                    <Badge className="bg-primary text-primary-foreground">
                      Save {product.savings}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Search;