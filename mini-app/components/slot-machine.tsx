'use client';

import { useState } from "react";
import Share from "@/components/share";
import { url } from "@/lib/metadata";

const fruits = [
  { name: "cherry", img: "/cherry.png" },
  { name: "lemon", img: "/lemon.png" },
  { name: "orange", img: "/orange.png" },
  { name: "plum", img: "/plum.png" },
  { name: "bell", img: "/bell.png" },
];

export default function SlotMachine() {
  const [current, setCurrent] = useState(fruits[0]);
  const [spinning, setSpinning] = useState(false);
  const [rolled, setRolled] = useState(false);

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    setRolled(false);
    // simulate spin duration
    setTimeout(() => {
      const random = fruits[Math.floor(Math.random() * fruits.length)];
      setCurrent(random);
      setSpinning(false);
      setRolled(true);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={spin}
        className="relative w-32 h-32 rounded-full border-4 border-primary flex items-center justify-center bg-background hover:bg-primary/10 transition-colors"
      >
        <img
          src={current.img}
          alt={current.name}
          className={`w-20 h-20 ${spinning ? "animate-spin" : ""}`}
        />
      </button>
      {rolled && (
        <Share
          text={`I just rolled a ${current.name}! Check it out: ${url}`}
          url={url}
        />
      )}
    </div>
  );
}
