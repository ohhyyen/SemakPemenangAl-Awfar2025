import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-900 to-red-950 p-4">
      <div className="text-center bg-gradient-to-br from-red-800 to-red-950 p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-white">Selamat Datang ke Aplikasi Anda</h1>
        <p className="text-xl text-white mb-6">
          Mula membina projek hebat anda di sini!
        </p>
        <Link to="/winner">
          <Button className="bg-green-500 hover:bg-green-600 text-white text-lg py-3 px-6 rounded-md transition-colors duration-300">
            Lihat Halaman Pemenang
          </Button>
        </Link>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;