import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { NavLink } from "./NavLink";

export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6 text-primary" />
          <span className="sr-only">Toggle Navigation</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-bank-islam-red-dark border-bank-islam-red-light">
        <SheetHeader>
          <Logo />
        </SheetHeader>
        <div className="flex flex-col space-y-4 mt-8">
          <NavLink to="/">Utama</NavLink>
          <NavLink to="/contact">Hubungi Kami</NavLink>
        </div>
      </SheetContent>
    </Sheet>
  );
};