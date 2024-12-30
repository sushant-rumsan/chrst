"use client";
import { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import FunAnimation from "./components/animation";

export default function AES() {
  const [secretKey, setSecretKey] = useState("");
  const encryptedText = "U2FsdGVkX1/YRQSupR6GpXNoOBD7CdBRPE94Dj1txV4RG5o+8GItKWUrFu1GMt/uXMFrRNU3vzymkCCGFIFEqexWWFIbVq18CzF7YYrrJRdIlHbOX4DWGaLBtOvJNBl5";
  const [decryptedText, setDecryptedText] = useState("");
  const [popperMessage, setPopperMessage] = useState<string | null>(null);
  const [pk, setPk] = useState(false);

  useEffect(() => {
    if (decryptedText) {
      const timer = setTimeout(() => {
        setPk(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [decryptedText]);

  const decryptText = (encryptedText: string, key: string) => {
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedText, key.toLowerCase());
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);

      if (decrypted) {
        setDecryptedText(decrypted);
        setPopperMessage("✅ Secret key is correct!");
      } else {
        throw new Error("Invalid key");
      }
    } catch {
      setDecryptedText("");
      setPopperMessage("❌ Incorrect secret key. Please try again.");
    }

    setTimeout(() => setPopperMessage(null), 3000);
  };



  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 to-pink-200 px-8 py-10 rounded-lg shadow-lg">
     
      {!decryptedText && 
      <>
      <h1 className="flex flex-col md:flex-row gap-2 text-4xl font-bold text-white mb-6 text-center">
       <span> ✨</span>  Claim Your Tokens, Manjik  <span>🎅</span>
      </h1>
      <div className="w-full max-w-md">
        <label
          htmlFor="secret-key"
          className="block text-sm font-semibold text-white mb-2"
        >
          Enter Your Magical Key
        </label>
        <textarea
          id="secret-key"
          className="w-full p-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
          placeholder="Type your secret code here"
          value={secretKey}
          onChange={(e) => setSecretKey(e.target.value)}
        />
      </div>

      <button
        onClick={() => decryptText(encryptedText, secretKey)}
        className="mt-6 bg-gradient-to-r from-orange-400 to-red-400 text-white text-lg font-medium py-3 px-6 rounded-full transform hover:scale-105 transition duration-300"
      >
        Reveal the Treasure 🎁
      </button>
      </>
      }

      {pk && (
        <div className="mt-8 w-full max-w-md text-center">
          <div className="flex flex-col text-3xl font-bold text-white gap-4 mb-4"><span>🎅 🎅 🎅 🎅 🎅 🎅</span>
            <span>🎉 🎉 🎉 🎉 🎉  🎉 </span>
            </div>
          <input
            id="decrypted-text"
            className="w-full p-3 border rounded-md text-gray-700 bg-white"
            value={`0x${decryptedText}`}
            readOnly
          />
          <img
            className="w-20 mx-auto mt-4"
            src="https://upload.wikimedia.org/wikipedia/commons/2/24/Polygon_blockchain_logo.png"
            alt="Success"
          />
          <h2 className="mt-4 text-3xl font-bold text-white flex flex-col gap-4">
          <img src="https://gifdb.com/images/thumbnail/congratulations-funny-clapping-rishi-dhamala-svbnofspomit4njv.gif" alt="" />
          
            <span>🎉 🎉 🎉 🎉 🎉  🎉 </span>
            <span>🎄 🎄 🎄 🎄 🎄 🎄</span>
          </h2>
        </div>
      )}

      

      {popperMessage && !decryptedText && (
        <div className="mt-6 px-4 py-2 bg-black text-white rounded-lg text-center text-lg animate-bounce">
          {popperMessage}
        </div>
      )}

{decryptedText && !pk && <FunAnimation /> }
    </div>
  );
}
