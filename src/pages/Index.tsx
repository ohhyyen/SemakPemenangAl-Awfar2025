"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Trophy } from "lucide-react";

const Index = () => {
  return (
    <Card className="w-full max-w-md text-center shadow-lg animate-fade-in-up">
      <CardHeader className="bg-bank-islam-red-dark rounded-t-lg p-6">
        <Trophy className="mx-auto h-16 w-16 text-foreground drop-shadow-md" />
        <CardTitle className="text-6xl font-extrabold text-foreground mt-4">TAHNIAH!</CardTitle>
        <CardDescription className="text-foreground text-lg">Cabutan Al Afwar 2025</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <img src="/pemenang-al-awfar.jpg" alt="Pemenang Al Awfar" className="w-full rounded-md mb-6" />
        <p className="text-foreground text-xl font-semibold mb-4">
          Anda adalah salah seorang dari
          <span className="block text-4xl font-bold text-primary my-2">100 PEMENANG SAGU HATI</span>
        </p>
        <p className="text-foreground text-base mb-6">
          Terima kasih atas penyertaan anda! Sila log masuk untuk penebusan hadiah anda.
        </p>
        <Link to="/login">
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3 rounded-md transition-colors duration-300">
            Log Masuk
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default Index;