"use client";
import { useEffect, useState } from "react";
import CryptoJS from "crypto-js";

export default function AES() {
  const [secretKey, setSecretKey] = useState("");
  const encryptedText = "U2FsdGVkX1/YRQSupR6GpXNoOBD7CdBRPE94Dj1txV4RG5o+8GItKWUrFu1GMt/uXMFrRNU3vzymkCCGFIFEqexWWFIbVq18CzF7YYrrJRdIlHbOX4DWGaLBtOvJNBl5"
  const [decryptedText, setDecryptedText] = useState("");
  const [popperMessage, setPopperMessage] = useState<string | null>(null);

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
    <div className="container">
      <h1 className="title">🎄 Claim Your Tokens, Manjik 🎅</h1>

      <div className="form-group">
        <label htmlFor="secret-key" className="label">
          Enter Secret Code
        </label>
        <textarea
          id="secret-key"
          className="input"
          placeholder="Enter your secret key here"
          value={secretKey}
          onChange={(e) => setSecretKey(e.target.value)}
        />
      </div>

      <div className="buttons">
        <button
          onClick={() => decryptText(encryptedText, secretKey)}
          className="decrypt-button"
        >
          Get Tokens
        </button>
      </div>

      {decryptedText && (
        <div className="output">
          <label htmlFor="decrypted-text" className="label">
            Decrypted Text
          </label>
          <input
            id="decrypted-text"
            className="input"
            value={decryptedText}
            readOnly
          />
        </div>
      )}

      {decryptedText && <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Polygon_blockchain_logo.png"/>}

      {decryptedText && <h2>Congratulations!</h2>}

      {popperMessage && <div className="popper">{popperMessage}</div>}

      <style jsx>{`
        .container {
          max-width: 600px;
          margin: auto;
          padding: 40px;
          text-align: center;
          background-color: #f0f8ff;
          border-radius: 15px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          font-family: "Arial", sans-serif;
        }

        .title {
          font-size: 2.5rem;
          color: #0070f3;
          margin-bottom: 20px;
          font-weight: bold;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .label {
          font-size: 1.2rem;
          color: #d32f2f;
          margin-bottom: 10px;
          display: block;
        }

        .input {
          width: 100%;
          padding: 12px;
          border-radius: 8px;
          border: 1px solid #ccc;
          background-color: #fff;
          font-size: 1.1rem;
          color: #333;
          box-sizing: border-box;
        }

        .input:focus {
          outline: none;
          border-color: #0070f3;
          box-shadow: 0 0 10px rgba(0, 112, 243, 0.2);
        }

        .buttons {
          margin-top: 20px;
        }

        .decrypt-button {
          padding: 12px 24px;
          margin-top: 15px;
          border-radius: 8px;
          border: 1px solid #28a745;
          background-color: #28a745;
          color: white;
          font-size: 1.2rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .decrypt-button:hover {
          background-color: #218838;
        }

        .output {
          margin-top: 20px;
        }

        .output input {
          width: 100%;
          height: 40px;
          padding: 10px;
          margin-top: 10px;
          border-radius: 8px;
          border: 1px solid #ccc;
          background-color: #fff;
          font-size: 1.1rem;
          color: #333;
          box-sizing: border-box;
        }

        .popper {
          margin-top: 20px;
          padding: 10px 20px;
          background-color: rgba(0, 0, 0, 0.8);
          color: white;
          font-size: 1rem;
          border-radius: 5px;
          animation: fadeInOut 3s forwards;
        }

        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          10% {
            opacity: 1;
            transform: translateY(0);
          }
          90% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}
