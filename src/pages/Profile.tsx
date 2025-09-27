import { Settings, Bell, CreditCard, HelpCircle, Shield, Leaf, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

const Profile = () => {
  const userStats = {
    totalSavings: "$284.50",
    thisMonth: "$47.20",
    ecoChoices: 23,
    rank: "Smart Saver"
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="pt-4">
        <h1 className="text-2xl font-bold text-foreground mb-2">Profile</h1>
        <p className="text-muted-foreground">Manage your account and preferences</p>
      </div>

      {/* User Stats */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Your Savings Journey
            <Badge className="bg-eco text-eco-foreground">{userStats.rank}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">{userStats.totalSavings}</p>
              <p className="text-xs text-muted-foreground">Total Saved</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-eco">{userStats.thisMonth}</p>
              <p className="text-xs text-muted-foreground">This Month</p>
            </div>
          </div>
          <div className="mt-4 p-3 bg-eco/10 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Leaf className="h-4 w-4 text-eco" />
                <span className="text-sm font-medium text-foreground">Eco-Friendly Choices</span>
              </div>
              <Badge variant="outline" className="border-eco text-eco">
                {userStats.ecoChoices} items
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Preferences */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Preferences
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Price Alerts</p>
              <p className="text-sm text-muted-foreground">Get notified of price drops</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Eco Suggestions</p>
              <p className="text-sm text-muted-foreground">Show sustainable alternatives</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Weekly Summary</p>
              <p className="text-sm text-muted-foreground">Weekly savings report</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      {/* Goals */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Savings Goals
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-foreground">Monthly Target: $50</span>
              <Badge className="bg-primary text-primary-foreground">94%</Badge>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{width: '94%'}}></div>
            </div>
            <p className="text-sm text-muted-foreground">$2.80 to go this month!</p>
          </div>
        </CardContent>
      </Card>

      {/* Settings Menu */}
      <div className="space-y-3">
        <h3 className="font-semibold text-foreground">Settings</h3>
        
        {[
          { icon: Bell, label: "Notifications", subtitle: "Manage alert preferences" },
          { icon: CreditCard, label: "Payment Methods", subtitle: "Saved cards and accounts" },
          { icon: Shield, label: "Privacy & Security", subtitle: "Data and account protection" },
          { icon: HelpCircle, label: "Help & Support", subtitle: "Get help and contact us" }
        ].map((item, index) => (
          <Card key={index} className="shadow-sm cursor-pointer hover:bg-muted/50 transition-colors">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <item.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground">{item.label}</h4>
                  <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Sign Out */}
      <Button variant="outline" className="w-full">
        Sign Out
      </Button>
    </div>
  );
};

export default Profile;