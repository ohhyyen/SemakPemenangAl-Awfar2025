"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { WinnerDisplay } from "@/components/WinnerDisplay"; // Import the new component

const Index = () => {
  return (
    <Card className="w-full max-w-md text-center shadow-lg animate-fade-in-up overflow-hidden">
      <CardContent className="p-0">
        <img src="/AA-Banner-Home-Page.jpg" alt="Al Awfar Banner" className="w-full" />
        <div className="p-6">
          <div className="bg-bank-islam-red-dark p-4 rounded-lg my-4">
            <h1 className="text-6xl font-extrabold text-foreground">TAHNIAH!</h1>
            <p className="text-foreground text-lg mt-2">Semua Para Pemenang Cabutan</p>
            <p className="text-foreground text-lg">Al-Awfar 2025</p>
          </div>
          
          {/* New Winner Display Component */}
          <WinnerDisplay />

          <img 
            src="/pemenang-al-awfar.jpg" 
            alt="Imej Pemenang Cabutan" 
            className="w-full rounded-md mb-6 mt-6" 
          />

          <p className="text-foreground text-lg font-semibold mb-4">
            Mungkin Anda Adalah Salah Seorang Dari
            <span className="block text-2xl font-extrabold text-primary my-2 [text-shadow:0_0_8px_hsl(var(--primary))]">500 PEMENANG SAGU HATI CABUTAN AL-AWFAR YANG BERNILAI RM1000</span>
          </p>
          <p className="text-foreground text-base mb-6">
            Terima kasih atas penyertaan anda! Sila log masuk untuk menyemak dan penebusan hadiah anda.
          </p>
          <Link to="/login">
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3 rounded-md transition-colors duration-300">
              Log Masuk
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default Index;