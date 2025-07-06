import { Logo } from "./Logo";
import { NavLink } from "./NavLink";

export const Footer = () => {
  return (
    <footer className="w-full p-8 bg-bank-islam-red-dark mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <Logo />
          <p className="text-sm text-primary/70 mt-2">
            &copy; {new Date().getFullYear()} Bank Islam Malaysia Berhad. Hak Cipta Terpelihara.
          </p>
        </div>
        <nav className="flex items-center space-x-6">
          <NavLink to="/">Utama</NavLink>
          <NavLink to="/contact">Hubungi Kami</NavLink>
        </nav>
      </div>
    </footer>
  );
};