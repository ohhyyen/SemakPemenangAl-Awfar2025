import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bank-islam-red p-4">
      <div className="text-center bg-bank-islam-red-dark p-8 rounded-lg shadow-md flex flex-col items-center">
        <img
          src="/images/al-awfar-welcome.jpeg"
          alt="Selamat Datang Al-Awfar"
          className="max-w-full h-auto mb-6 rounded-lg shadow-lg"
        />
        <Link to="/winner">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3 px-6 rounded-md transition-colors duration-300">
            Lihat Halaman Pemenang
          </Button>
        </Link>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;