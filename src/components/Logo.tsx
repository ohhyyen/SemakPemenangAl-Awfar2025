import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/">
      <img src="/BIMB-Logo-Main.png" alt="BIMB Logo" className="h-8 w-auto bg-white p-1 rounded" />
    </Link>
  );
};