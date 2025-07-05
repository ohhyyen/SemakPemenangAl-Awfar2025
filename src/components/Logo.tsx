import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/">
      <img src="/BIMB-Logo-Main.png" alt="BIMB Logo" className="h-8 w-auto filter brightness-0 invert" />
    </Link>
  );
};