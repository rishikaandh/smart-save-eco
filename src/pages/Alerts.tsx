import { Bell, Leaf, Tag, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const mockAlerts = [
  {
    id: 1,
    type: "price_drop",
    title: "Price Drop Alert",
    message: "Organic Apples dropped 25% at FreshMart",
    time: "2 min ago",
    savings: "$1.50",
    isNew: true
  },
  {
    id: 2,
    type: "eco_alternative",
    title: "Eco-Friendly Alternative",
    message: "Found sustainable option for your usual detergent",
    time: "1 hour ago",
    savings: "$2.00",
    isNew: true
  },
  {
    id: 3,
    type: "weekly_deal",
    title: "Weekly Deal",
    message: "Your favorite yogurt is 30% off this week",
    time: "3 hours ago",
    savings: "$3.99",
    isNew: false
  }
];

const recommendations = [
  {
    id: 1,
    title: "Switch to Generic Brands",
    description: "Save 40% on cleaning supplies",
    potential: "$15.60/month"
  },
  {
    id: 2,
    title: "Buy in Bulk",
    description: "Rice and pasta bulk buying opportunities",
    potential: "$8.20/month"
  },
  {
    id: 3,
    title: "Seasonal Shopping",
    description: "Winter vegetables are 50% cheaper now",
    potential: "$12.40/month"
  }
];

const Alerts = () => {
  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="pt-4">
        <h1 className="text-2xl font-bold text-foreground mb-2">Discount Alerts</h1>
        <p className="text-muted-foreground">Stay updated on savings and recommendations</p>
      </div>

      {/* Recent Alerts */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-foreground">Recent Alerts</h2>
          <Badge className="bg-primary text-primary-foreground">
            {mockAlerts.filter(alert => alert.isNew).length} New
          </Badge>
        </div>

        {mockAlerts.map((alert) => (
          <Card key={alert.id} className={`shadow-sm ${alert.isNew ? 'ring-2 ring-primary/20' : ''}`}>
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-full bg-primary/10">
                  {alert.type === 'price_drop' && <TrendingDown className="h-4 w-4 text-primary" />}
                  {alert.type === 'eco_alternative' && <Leaf className="h-4 w-4 text-eco" />}
                  {alert.type === 'weekly_deal' && <Tag className="h-4 w-4 text-primary" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-medium text-foreground">{alert.title}</h3>
                    {alert.isNew && <Badge variant="secondary" className="text-xs">New</Badge>}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{alert.message}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{alert.time}</span>
                    <Badge className="bg-primary text-primary-foreground">
                      Save {alert.savings}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Personalized Recommendations */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Personalized Tips</h2>
        
        {recommendations.map((rec) => (
          <Card key={rec.id} className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center justify-between">
                {rec.title}
                <Badge variant="outline" className="text-eco border-eco">
                  {rec.potential}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground mb-3">{rec.description}</p>
              <Button size="sm" variant="outline" className="w-full">
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Alerts;