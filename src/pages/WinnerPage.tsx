"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Trophy } from "lucide-react";

const WinnerPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-500 to-white p-4">
      <Card className="w-full max-w-md text-center shadow-lg animate-fade-in-up">
        <CardHeader className="bg-yellow-400 rounded-t-lg p-6">
          <Trophy className="mx-auto h-16 w-16 text-white drop-shadow-md" />
          <CardTitle className="text-3xl font-extrabold text-white mt-4">TAHNIAH!</CardTitle>
          <CardDescription className="text-white text-lg">Cabutan Al Afwar 2025</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-gray-800 text-xl font-semibold mb-4">
            Anda adalah salah seorang dari
            <span className="block text-4xl font-bold text-green-600 my-2">100 PEMENANG SAGU HATI</span>
          </p>
          <p className="text-gray-700 text-base mb-6">
            Terima kasih atas penyertaan anda! Sila hubungi kami untuk maklumat lanjut mengenai penebusan hadiah anda.
          </p>
          <Link to="/">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-3 rounded-md transition-colors duration-300">
              Kembali ke Laman Utama
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default WinnerPage;