import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, User, Sprout } from "lucide-react";
import { cn } from "@/lib/utils";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/", icon: LayoutDashboard },
    { name: "Profile", path: "/profile", icon: User },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      <nav className="border-b bg-card/70 backdrop-blur-md sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            <Link to="/" className="flex items-center gap-3 font-bold text-2xl">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent shadow-md transition-transform hover:scale-105">
                <Sprout className="h-7 w-7 text-primary-foreground drop-shadow" />
              </div>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-tight">
                AgriMonitor
              </span>
            </Link>
            <div className="flex gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "flex items-center gap-2 px-5 py-2 rounded-xl font-medium transition-all duration-200 relative group",
                      isActive
                        ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg scale-105"
                        : "hover:bg-secondary/80 text-muted-foreground hover:text-foreground"
                    )}
                    style={{ minWidth: 120 }}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="absolute left-3 right-3 -bottom-1 h-1 rounded-full bg-gradient-to-r from-accent to-primary opacity-80 animate-pulse" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-10">{children}</main>
    </div>
  );
};
