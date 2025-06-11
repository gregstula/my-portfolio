import React from "react";
import { Gamepad2 } from "lucide-react";

const Solitaire = () => {
  return (
    <section id="solitaire" className="py-20 px-4 bg-white/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-sky-900 mb-12">
          Solitaire Game
        </h2>
        <div className="bg-white/80 rounded-lg p-12 shadow-sm border border-sky-100">
          <div className="mb-8">
            <Gamepad2 size={64} className="text-sky-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-sky-900 mb-4">
              Classic Solitaire
            </h3>
            <p className="text-gray-700 mb-8">
              Take a break and enjoy a classic game of Solitaire! Built with
              React and featuring smooth animations and responsive design.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[2/3] bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm"
              >
                {["A♠", "K♥", "Q♦", "J♣", "10♠", "9♥", "8♦", "7♣"][i]}
              </div>
            ))}
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Play Solitaire
          </button>
        </div>
      </div>
    </section>
  );
};

export default Solitaire;
