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

interface WinnerEntry {
  id: string;
  text: string;
}

export const WinnerDisplay = () => {
  const [recentWinners, setRecentWinners] = useState<WinnerEntry[]>([]);
  const MAX_WINNERS_DISPLAY = 4; // Memaparkan 4 pemenang terkini

  const generateWinnerEntry = () => {
    const randomIndex = Math.floor(Math.random() * winnerNames.length);
    const randomName = winnerNames[randomIndex];
    const text = `Tahniah ${randomName}, Berjaya Menebus RM2000 Pemenang Sagu hati Cabutan Al-Awfar 2025`;
    return { id: crypto.randomUUID(), text }; // Menggunakan ID unik untuk setiap entri
  };

  useEffect(() => {
    // Populasi awal untuk mengisi paparan
    const initialEntries: WinnerEntry[] = [];
    for (let i = 0; i < MAX_WINNERS_DISPLAY; i++) {
      initialEntries.push(generateWinnerEntry());
    }
    setRecentWinners(initialEntries);

    const intervalId = setInterval(() => {
      setRecentWinners(prevWinners => {
        const newEntry = generateWinnerEntry();
        // Buang elemen tertua (pertama), tambah yang baru ke hujung
        const updated = [...prevWinners.slice(1), newEntry];
        return updated;
      });
    }, 30000); // Kemas kini setiap 30 saat

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Card className="w-full max-w-md text-center shadow-lg animate-fade-in-up mt-4">
      <CardContent className="p-4 bg-bank-islam-red-dark rounded-lg">
        <div className="space-y-2 overflow-hidden min-h-[6em] flex flex-col justify-end"> {/* Ketinggian tetap untuk 4 baris, dan justify-end untuk memastikan item baru berada di bawah */}
          {recentWinners.map((entry) => (
            <p
              key={entry.id}
              className="text-foreground text-[0.625rem] font-normal animate-fade-in-up"
            >
              {entry.text}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};