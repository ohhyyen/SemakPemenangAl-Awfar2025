import { Header } from "@/components/Header";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import React from "react";

const Index = () => {
  React.useEffect(() => {
    console.log("Index component rendered!");
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bank-islam-red">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="text-center bg-bank-islam-red-dark p-8 rounded-lg shadow-md flex flex-col items-center">
          <h1 className="text-7xl font-extrabold text-primary mb-2 drop-shadow-lg">
            TAHNIAH
          </h1>
          <p className="text-base font-normal text-primary mb-6 drop-shadow-lg">
            Kepada Para Pemenang Al-Awfar 2025
          </p>
          <img
            src="/pemenang-al-awfar.png"
            alt="Para Pemenang Al-Awfar"
            className="rounded-lg shadow-lg mb-6 w-full max-w-lg"
          />
          <Link to="/winner">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3 px-6 rounded-md transition-colors duration-300">
              Lihat Halaman Pemenang
            </Button>
          </Link>
        </div>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Index;