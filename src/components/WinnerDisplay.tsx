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
  const MAX_WINNERS_DISPLAY = 2; // Memaparkan 2 pemenang terkini

  const generateWinnerEntry = () => {
    const randomIndex = Math.floor(Math.random() * winnerNames.length);
    const randomName = winnerNames[randomIndex];
    // Mengemas kini teks mesej tahniah
    const text = `TAHNIAH !! ${randomName}, Telah Menebus RM1000 Hadiah Sagu Hati Cabutan Al-Awfar`;
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
        <div className="space-y-2 overflow-hidden min-h-[3em] flex flex-col justify-end"> {/* Ketinggian tetap untuk 2 baris */}
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