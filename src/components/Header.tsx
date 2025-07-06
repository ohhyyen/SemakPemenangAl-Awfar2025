import { useIsMobile } from "@/hooks/use-mobile";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { NavLink } from "./NavLink";

export const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header className="w-full p-4 bg-bank-islam-red-dark shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        {isMobile ? (
          <MobileNav />
        ) : (
          <nav className="flex items-center space-x-6">
            <NavLink to="/">Utama</NavLink>
            <NavLink to="/contact">Hubungi Kami</NavLink>
          </nav>
        )}
      </div>
    </header>
  );
};