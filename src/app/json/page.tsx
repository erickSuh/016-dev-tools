"use client";

import { useState } from "react";

export default function JsonFormatter() {
  const [jsonText, setJsonText] = useState("");
  
  const formatJson = (json: string): string => {
    try {
      const parsed = JSON.parse(json);
      return JSON.stringify(parsed, null, 2);
    } catch (error) {
      return `Error: Invalid JSON - ${(error as Error).message}`;
    }
  };

  const minifyJson = (json: string): string => {
    try {
      const parsed = JSON.parse(json);
      return JSON.stringify(parsed);
    } catch (error) {
      return `Error: Invalid JSON - ${(error as Error).message}`;
    }
  };

  const onClickEncode = () => {
    setJsonText(formatJson(jsonText));
  };

  const onClickDecode = () => {
    setJsonText(minifyJson(jsonText));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold">JSON</h1>
      <textarea
        className="border-2 border-gray-300 rounded-md p-4 mt-4 text-black w-full h-96"
        placeholder="Enter JSON"
        value={jsonText}
        onChange={(e) => setJsonText(e.target.value)}
      />
      <div className="flex gap-4 mt-4">
        <button
          className="bg-blue-500 text-white rounded-md p-2"
          onClick={onClickEncode}
        >
          Format JSON
        </button>
        <button
          className="bg-blue-500 text-white rounded-md p-2"
          onClick={onClickDecode}
        >
          Minify JSON
        </button>
      </div>
    </main>
  );
}
