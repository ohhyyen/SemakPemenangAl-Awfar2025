import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared-supa';
import { supabase } from '@/lib/supabase';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        // Arahkan pengguna ke halaman utama selepas berjaya log masuk
        navigate('/');
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  return (
    <Card className="w-full max-w-sm text-left shadow-lg animate-fade-in-up">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-foreground">Log Masuk / Daftar</CardTitle>
        <CardDescription className="text-foreground/80">
          Gunakan e-mel anda untuk log masuk atau mendaftar akaun baru.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Auth
          supabaseClient={supabase}
          appearance={{ 
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: 'hsl(var(--bank-islam-red))',
                  brandAccent: 'hsl(var(--bank-islam-red-dark))',
                  brandButtonText: 'white',
                },
                radii: {
                  borderRadius: 'var(--radius)',
                  buttonBorderRadius: 'var(--radius)',
                }
              }
            }
          }}
          theme="dark"
          providers={[]}
          localization={{
            variables: {
              sign_in: {
                email_label: 'Alamat E-mel',
                password_label: 'Kata Laluan',
                email_input_placeholder: 'e-mel-anda@domain.com',
                password_input_placeholder: 'Kata laluan anda',
                button_label: 'Log Masuk',
                link_text: 'Sudah mempunyai akaun? Log masuk',
              },
              sign_up: {
                email_label: 'Alamat E-mel',
                password_label: 'Kata Laluan',
                email_input_placeholder: 'e-mel-anda@domain.com',
                password_input_placeholder: 'Kata laluan anda',
                button_label: 'Daftar',
                link_text: 'Belum mempunyai akaun? Daftar',
              },
              forgotten_password: {
                email_label: 'Alamat E-mel',
                button_label: 'Hantar Arahan Tetapan Semula',
                link_text: 'Lupa kata laluan?',
              },
            },
          }}
        />
      </CardContent>
    </Card>
  );
};

export default LoginPage;