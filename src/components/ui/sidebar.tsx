import React from "react"; // Added React import
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Settings,
  Users,
  Package,
  ShoppingCart,
  BarChart2,
  MessageSquare,
  HelpCircle,
  LogOut,
  Menu,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  className?: string;
}

interface NavItemProps {
  icon: React.ElementType;
  title: string;
  to: string;
  isCollapsed: boolean;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  icon: Icon,
  title,
  to,
  isCollapsed,
  active,
}) => {
  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <Link
          to={to}
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground transition-all hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            active && "bg-sidebar-primary text-sidebar-primary-foreground",
            isCollapsed && "justify-center",
          )}
        >
          <Icon className="h-5 w-5" />
          {!isCollapsed && <span className="text-sm">{title}</span>}
        </Link>
      </TooltipTrigger>
      {isCollapsed && <TooltipContent side="right">{title}</TooltipContent>}
    </Tooltip>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({
  isCollapsed,
  setIsCollapsed,
  className,
}) => {
  const location = useLocation();

  const navItems = [
    { icon: LayoutDashboard, title: "Dashboard", to: "/dashboard" },
    { icon: Package, title: "Products", to: "/products" },
    { icon: ShoppingCart, title: "Orders", to: "/orders" },
    { icon: Users, title: "Customers", to: "/customers" },
    { icon: BarChart2, title: "Analytics", to: "/analytics" },
  ];

  const supportItems = [
    { icon: MessageSquare, title: "Support", to: "/support" },
    { icon: HelpCircle, title: "Help", to: "/help" },
  ];

  return (
    <aside
      className={cn(
        "group flex flex-col h-full bg-sidebar-background text-sidebar-foreground border-r border-sidebar-border transition-all duration-300 ease-in-out",
        isCollapsed ? "w-[60px]" : "w-[240px]",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center h-16 px-4",
          isCollapsed ? "justify-center" : "justify-between",
        )}
      >
        {!isCollapsed && (
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <Package className="h-6 w-6" />
            <span>Acme Inc</span>
          </Link>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={cn(
            "rounded-full transition-transform duration-300",
            isCollapsed ? "rotate-180" : "",
          )}
        >
          {isCollapsed ? (
            <ChevronRight className="h-5 w-5 text-sidebar-foreground" />
          ) : (
            <ChevronLeft className="h-5 w-5 text-sidebar-foreground" />
          )}
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </div>
      <ScrollArea className="flex-grow py-4">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          {navItems.map((item) => (
            <NavItem
              key={item.to}
              icon={item.icon}
              title={item.title}
              to={item.to}
              isCollapsed={isCollapsed}
              active={location.pathname.startsWith(item.to)}
            />
          ))}
        </nav>
        <Separator className="my-4 bg-sidebar-border" />
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          {supportItems.map((item) => (
            <NavItem
              key={item.to}
              icon={item.icon}
              title={item.title}
              to={item.to}
              isCollapsed={isCollapsed}
              active={location.pathname.startsWith(item.to)}
            />
          ))}
        </nav>
      </ScrollArea>
      <div className="mt-auto p-4 border-t border-sidebar-border">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          <NavItem
            icon={Settings}
            title="Settings"
            to="/settings"
            isCollapsed={isCollapsed}
            active={location.pathname.startsWith("/settings")}
          />
          <NavItem
            icon={LogOut}
            title="Logout"
            to="/logout"
            isCollapsed={isCollapsed}
            active={location.pathname.startsWith("/logout")}
          />
        </nav>
      </div>
    </aside>
  );
};

export const MobileSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { icon: LayoutDashboard, title: "Dashboard", to: "/dashboard" },
    { icon: Package, title: "Products", to: "/products" },
    { icon: ShoppingCart, title: "Orders", to: "/orders" },
    { icon: Users, title: "Customers", to: "/customers" },
    { icon: BarChart2, title: "Analytics", to: "/analytics" },
  ];

  const supportItems = [
    { icon: MessageSquare, title: "Support", to: "/support" },
    { icon: HelpCircle, title: "Help", to: "/help" },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6 text-primary" />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-3/4 bg-sidebar-background border-sidebar-border">
        <SheetHeader>
          <Link to="/" className="flex items-center gap-2 font-semibold text-sidebar-foreground">
            <Package className="h-6 w-6" />
            <span>Acme Inc</span>
          </Link>
        </SheetHeader>
        <ScrollArea className="flex-grow py-4">
          <nav className="grid items-start px-2 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground transition-all hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  location.pathname.startsWith(item.to) && "bg-sidebar-primary text-sidebar-primary-foreground",
                )}
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                <span className="text-sm">{item.title}</span>
              </Link>
            ))}
          </nav>
          <Separator className="my-4 bg-sidebar-border" />
          <nav className="grid items-start px-2 text-sm font-medium">
            {supportItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground transition-all hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  location.pathname.startsWith(item.to) && "bg-sidebar-primary text-sidebar-primary-foreground",
                )}
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                <span className="text-sm">{item.title}</span>
              </Link>
            ))}
          </nav>
        </ScrollArea>
        <div className="mt-auto p-4 border-t border-sidebar-border">
          <nav className="grid items-start px-2 text-sm font-medium">
            <Link
              to="/settings"
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground transition-all hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                location.pathname.startsWith("/settings") && "bg-sidebar-primary text-sidebar-primary-foreground",
              )}
              onClick={() => setIsOpen(false)}
            >
              <Settings className="h-5 w-5" />
              <span className="text-sm">Settings</span>
            </Link>
            <Link
              to="/logout"
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground transition-all hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                location.pathname.startsWith("/logout") && "bg-sidebar-primary text-sidebar-primary-foreground",
              )}
              onClick={() => setIsOpen(false)}
            >
              <LogOut className="h-5 w-5" />
              <span className="text-sm">Logout</span>
            </Link>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};