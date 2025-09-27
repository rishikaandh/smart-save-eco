import { ReactNode } from "react";
import { useLocation, Link } from "react-router-dom";
import { Home, Search, Bell, ShoppingCart, User } from "lucide-react";

interface MobileLayoutProps {
  children: ReactNode;
}

export function MobileLayout({ children }: MobileLayoutProps) {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/search", icon: Search, label: "Search" },
    { path: "/alerts", icon: Bell, label: "Alerts" },
    { path: "/shopping-list", icon: ShoppingCart, label: "List" },
    { path: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto">
      {/* Main content */}
      <main className="flex-1 pb-20">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-card border-t border-border">
        <div className="flex items-center justify-around py-2">
          {navItems.map(({ path, icon: Icon, label }) => {
            const isActive = currentPath === path;
            return (
              <Link
                key={path}
                to={path}
                className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="h-5 w-5 mb-1" />
                <span className="text-xs font-medium">{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}