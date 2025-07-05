import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

const ContactPage = () => {
  return (
    <Card className="w-full max-w-md text-center shadow-lg animate-fade-in-up">
      <CardHeader>
        <CardTitle className="text-3xl font-extrabold text-foreground">Hubungi Kami</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-foreground">
          Untuk sebarang pertanyaan, sila hubungi kami melalui saluran di bawah:
        </p>
        <div className="flex items-center justify-center space-x-2 text-foreground">
          <Mail className="h-5 w-5" />
          <span>support@al-awfar.com</span>
        </div>
        <div className="flex items-center justify-center space-x-2 text-foreground">
          <Phone className="h-5 w-5" />
          <span>+60 3 1234 5678</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactPage;