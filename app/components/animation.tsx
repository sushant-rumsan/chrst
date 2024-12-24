"use client";
import React from "react";

const FunImageAnimation = () => {
  const imageSrc = "happy-manjik.png";

  return (
    <div className="flex items-center justify-center to-red-500">
      <div className="relative w-70 h-50">
        <img
          src={imageSrc}
          alt="Fun Image"
          className="w-full h-full object-cover rounded-lg animate-fun"
        />
        
      </div>
      <style jsx>{`
        @keyframes funAnimation {
         0% {
            transform: rotateY(0deg) scale(0.5);
          }
          10% {
            transform: rotateY(180deg) scale(0.8);
          }
          20% {
            transform: rotateY(360deg) scale(1.2);
          }
          30% {
            transform: rotateY(0deg) scale(2.5);
          }
          40% {
            transform: rotateY(180deg) scale(1.4);
          }
          50% {
            transform: rotateY(360deg) scale(1.3);
          }
          60% {
            transform: rotate(0deg) scale(1);
          }
          70% {
            transform: rotate(0deg) scale(0.5);
          }
          80% {
            transform: rotate(30deg) scale(0.2);
          }
          90% {
            transform: rotate(150deg) scale(0.2);
          }
          100% {
            transform: rotate(360deg) scale(0);
          }
        }

        .animate-fun {
          animation: funAnimation 3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default FunImageAnimation;
