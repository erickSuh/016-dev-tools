"use client";

import { useState } from "react";

export default function Uri() {
  const [uriText, setUriText] = useState("");

  const onClickEncode = () => {
    try {
      const encoded = encodeURIComponent(uriText);
      setUriText(encoded);
    } catch (error) {
      setUriText(`Error encoding URI: ${(error as Error).message}`);
    }
  };

  const onClickDecode = () => {
    try {
      const decoded = decodeURIComponent(uriText);
      setUriText(decoded);
    } catch (error) {
      setUriText(`Error decoding URI: ${(error as Error).message}`);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold">URI Encoder/Decoder</h1>
      <textarea
        className="border-2 border-gray-300 rounded-md p-4 mt-4 text-black w-full h-96"
        placeholder="Enter text to encode or decode"
        value={uriText}
        onChange={(e) => setUriText(e.target.value)}
      />
      <div className="flex gap-4 mt-4">
        <button
          className="bg-blue-500 text-white rounded-md p-2"
          onClick={onClickEncode}
        >
          Encode URI
        </button>
        <button
          className="bg-blue-500 text-white rounded-md p-2"
          onClick={onClickDecode}
        >
          Decode URI
        </button>
      </div>
    </main>
  );
}
