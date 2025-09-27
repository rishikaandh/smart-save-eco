import { TrendingUp, DollarSign, Leaf, Star, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Index = () => {
  const todaysSavings = "$12.40";
  const monthlyTarget = "$50.00";
  const progress = 94;

  const featuredDeals = [
    {
      id: 1,
      title: "Organic Produce Sale",
      discount: "30% OFF",
      store: "GreenMart",
      expires: "2 days left",
      isEco: true,
      image: "🥬"
    },
    {
      id: 2,
      title: "Bulk Rice & Pasta",
      discount: "Buy 2 Get 1",
      store: "MegaSave",
      expires: "5 days left",
      isEco: false,
      image: "🍚"
    },
    {
      id: 3,
      title: "Sustainable Cleaning",
      discount: "25% OFF",
      store: "EcoClean",
      expires: "1 week left",
      isEco: true,
      image: "🧽"
    }
  ];

  const quickStats = [
    { label: "Today's Savings", value: todaysSavings, icon: DollarSign, color: "text-primary" },
    { label: "Items Saved On", value: "8", icon: TrendingUp, color: "text-primary" },
    { label: "Eco Choices", value: "3", icon: Leaf, color: "text-eco" },
    { label: "Stores Compared", value: "12", icon: Star, color: "text-foreground" }
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="pt-4">
        <h1 className="text-2xl font-bold text-foreground mb-1">Welcome back!</h1>
        <p className="text-muted-foreground">Ready to save smart today?</p>
      </div>

      {/* Monthly Progress */}
      <Card className="shadow-sm bg-gradient-to-r from-primary/5 to-primary/10">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-foreground">Monthly Savings Goal</h3>
            <Badge className="bg-primary text-primary-foreground">{progress}%</Badge>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium text-foreground">${(parseFloat(monthlyTarget.replace('$', '')) * (progress / 100)).toFixed(2)} / {monthlyTarget}</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300" 
                style={{width: `${progress}%`}}
              ></div>
            </div>
            <p className="text-xs text-muted-foreground">Just $2.80 away from your goal!</p>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3">
        {quickStats.map((stat, index) => (
          <Card key={index} className="shadow-sm">
            <CardContent className="p-4 text-center">
              <stat.icon className={`h-6 w-6 mx-auto mb-2 ${stat.color}`} />
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Featured Discounts */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-foreground">Featured Deals</h2>
          <Link to="/search">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              View All
              <ArrowRight className="h-3 w-3" />
            </Button>
          </Link>
        </div>

        <div className="space-y-3">
          {featuredDeals.map((deal) => (
            <Card key={deal.id} className="shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{deal.image}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-foreground">{deal.title}</h4>
                      {deal.isEco && (
                        <Badge className="ml-2 bg-eco text-eco-foreground">
                          <Leaf className="h-3 w-3 mr-1" />
                          Eco
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{deal.store}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-primary text-primary-foreground">
                          {deal.discount}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{deal.expires}</span>
                      </div>
                      <Button size="sm" variant="outline">
                        View Deal
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <Link to="/search">
          <Card className="shadow-sm cursor-pointer hover:bg-muted/50 transition-colors">
            <CardContent className="p-4 text-center">
              <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-2">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <h4 className="font-medium text-foreground">Compare Prices</h4>
              <p className="text-xs text-muted-foreground mt-1">Find the best deals</p>
            </CardContent>
          </Card>
        </Link>
        <Link to="/shopping-list">
          <Card className="shadow-sm cursor-pointer hover:bg-muted/50 transition-colors">
            <CardContent className="p-4 text-center">
              <div className="p-3 rounded-full bg-eco/10 w-fit mx-auto mb-2">
                <Leaf className="h-5 w-5 text-eco" />
              </div>
              <h4 className="font-medium text-foreground">Smart List</h4>
              <p className="text-xs text-muted-foreground mt-1">Optimized shopping</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default Index;
