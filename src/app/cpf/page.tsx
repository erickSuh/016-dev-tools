"use client";

import { useState } from "react";
import { generateCpf } from "../utilities/cpf";

export default function Cpf() {
  const [cpf, setCpf] = useState("");
  const onClick = () => {
    const cpf = generateCpf();
    setCpf(cpf);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold">CPF</h1>
      <input
        type="text"
        className="border-2 border-gray-300 rounded-md p-2 mt-4 text-black"
        placeholder="Enter CPF"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white rounded-md p-2 mt-4"
        onClick={onClick}
      >
        Generate CPF
      </button>
    </main>
  );
}
