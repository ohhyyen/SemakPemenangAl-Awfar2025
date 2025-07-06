"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AlAwfarBanner from "@/assets/AA-Banner-Home-Page.jpg";

const Index = () => {
  return (
    <Card className="w-full max-w-md text-center shadow-lg animate-fade-in-up">
      <CardHeader className="bg-bank-islam-red-dark rounded-t-lg p-6">
        <CardTitle className="text-6xl font-extrabold text-foreground mt-4">TAHNIAH!</CardTitle>
        <CardDescription className="text-foreground text-lg">Para Pemenang Cabutan Al-Awfar 2025</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <img src={AlAwfarBanner} alt="Al Awfar Banner" className="w-full rounded-md mb-6" />
        <p className="text-foreground text-lg font-semibold mb-4">
          Mungkin Anda Adalah Salah Seorang Dari
          <span className="block text-2xl font-extrabold text-primary my-2 [text-shadow:0_0_8px_hsl(var(--primary))]">100 PEMENANG SAGU HATI CABUTAN AL-AWFAR YANG BERNILAI RM2000</span>
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