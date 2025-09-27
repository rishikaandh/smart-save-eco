import { useState } from "react";
import { Plus, Check, MapPin, Clock, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

const mockListItems = [
  {
    id: 1,
    name: "Organic Bananas",
    quantity: "2 lbs",
    bestStore: "GreenMart",
    price: "$2.99",
    completed: false
  },
  {
    id: 2,
    name: "Whole Wheat Bread",
    quantity: "1 loaf",
    bestStore: "FreshCo",
    price: "$1.89",
    completed: true
  },
  {
    id: 3,
    name: "Free-Range Eggs",
    quantity: "1 dozen",
    bestStore: "Natural Foods",
    price: "$4.99",
    completed: false
  },
  {
    id: 4,
    name: "Almond Milk",
    quantity: "1 carton",
    bestStore: "HealthyMart",
    price: "$3.49",
    completed: false
  }
];

const ShoppingList = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState(mockListItems);

  const toggleItem = (id: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const totalSavings = "$12.40";
  const estimatedTotal = "$13.36";
  const completedItems = items.filter(item => item.completed).length;

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="pt-4">
        <h1 className="text-2xl font-bold text-foreground mb-2">Shopping List</h1>
        <p className="text-muted-foreground">Optimized for savings and efficiency</p>
      </div>

      {/* Shopping Summary */}
      <Card className="shadow-sm">
        <CardContent className="p-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-primary">{items.length}</p>
              <p className="text-xs text-muted-foreground">Items</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-eco">{totalSavings}</p>
              <p className="text-xs text-muted-foreground">Est. Savings</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{estimatedTotal}</p>
              <p className="text-xs text-muted-foreground">Total</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Optimization Tips */}
      <Card className="shadow-sm bg-primary/5">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Route Optimization</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Visit GreenMart → FreshCo → Natural Foods for optimal route and maximum savings
          </p>
          <div className="flex items-center gap-4 mt-3">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">25 min</span>
            </div>
            <div className="flex items-center gap-1">
              <DollarSign className="h-3 w-3 text-eco" />
              <span className="text-xs text-eco font-medium">Save extra $3.20</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Add New Item */}
      <div className="flex gap-2">
        <Input
          placeholder="Add item to list..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="flex-1"
        />
        <Button size="default" className="px-3">
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      {/* Shopping List Items */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-foreground">Items</h3>
          <Badge variant="secondary">
            {completedItems}/{items.length} completed
          </Badge>
        </div>

        {items.map((item) => (
          <Card key={item.id} className={`shadow-sm transition-opacity ${item.completed ? 'opacity-60' : ''}`}>
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <Checkbox
                  checked={item.completed}
                  onCheckedChange={() => toggleItem(item.id)}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className={`font-medium ${item.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                      {item.name}
                    </h4>
                    <span className="text-lg font-bold text-primary">{item.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.quantity}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-sm text-muted-foreground">Best at {item.bestStore}</span>
                    {!item.completed && (
                      <Badge variant="outline" className="text-xs">
                        <MapPin className="h-3 w-3 mr-1" />
                        Navigate
                      </Badge>
                    )}
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

export default ShoppingList;