"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

const winnerNames = [
  "NURUL AMIRAH BINTI SALLEH",
  "MUHAMMAD FAIZ BIN AHMAD",
  "SITI AISYAH BINTI ISMAIL",
  "AHMAD ZULKIFLI BIN HASSAN",
  "FATIMAH AZZAHRA BINTI ALI",
  "MOHD RIDZUAN BIN ABDULLAH",
  "NOR AZLINA BINTI MOHAMAD",
  "TAN CHIN HOCK",
  "LEE MEI LING",
  "SUBRAMANIAM A/L MUTHU",
];

export const WinnerDisplay = () => {
  const [currentWinner, setCurrentWinner] = useState("");

  useEffect(() => {
    const updateWinner = () => {
      const randomIndex = Math.floor(Math.random() * winnerNames.length);
      const randomName = winnerNames[randomIndex];
      setCurrentWinner(`Tahniah ${randomName}, Berjaya Menebus RM2000 Pemenang Sagu hati Cabutan Al-Awfar 2025`);
    };

    // Set initial winner
    updateWinner();

    // Update winner every 30 seconds
    const intervalId = setInterval(updateWinner, 30000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Card className="w-full max-w-md text-center shadow-lg animate-fade-in-up mt-4">
      <CardContent className="p-4 bg-bank-islam-red-dark rounded-lg">
        <p className="text-foreground text-lg font-semibold">
          {currentWinner}
        </p>
      </CardContent>
    </Card>
  );
};