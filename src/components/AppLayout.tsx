import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MadeWithDyad } from "./made-with-dyad";

export const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-bank-islam-red">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <Outlet />
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};