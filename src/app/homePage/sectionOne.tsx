// components/HowItWorks.tsx
import React from "react";

const steps = [
  {
    number: "1",
    title: "Post Your Offer",
    text: "List your car, property, or item – and what you want in return.",
  },
  {
    number: "2",
    title: "Find Your Perfect Swap",
    text: "Browse offers and connect with people looking to swap.",
  },
  {
    number: "3",
    title: "Make the Deal",
    text: "Agree on the terms and exchange directly – no fees, no hassle.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-[1300px] h-[410px] mx-auto rounded-[15px] mb-[50px] bg-[#EDEEE6]">
      <div className="w-full max-w-[1300px] mx-auto py-12 text-[#181818]">
        <h2 className="text-[38px] font-regular text-center mb-10">
          How It Works?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center gap-8"
            >
              {/* Кружок с номером */}
              <div className="w-[80px] h-[80px] bg-[#92C11D] rounded-full text-white flex items-center justify-center text-[32px] font-regular">
                {step.number}
              </div>

              {/* Горизонтальная стрелка (только на md+, кроме последнего) */}
              {index < steps.length - 1 && (
                <svg
                  className="hidden md:block absolute"
                  width="350"
                  height="16"
                  viewBox="-8 1 110 15"
                  // позиционируем по центру кружка и выдвигаем вправо от его края (40px радиус)
                  style={{
                    left: "calc(50% + 40px)",
                    top: "40px",
                    transform: "translateY(-50%)",
                  }}
                >
                  <defs>
                    <marker
  id={`arrowhead-${index}`}
  markerWidth="12"
  markerHeight="12"
  refX="10"
  refY="6"
  orient="auto"
>
  <path
    d="M1,2 L10,6 L1,10"
    fill="none"
    stroke="#8A8A8A"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</marker>
                  </defs>
                  <line
                    x1="0"
                    y1="8"
                    x2="90"
                    y2="8"
                    stroke="#8A8A8A"
                    strokeWidth="1"
                    markerEnd={`url(#arrowhead-${index})`}
                  />
                </svg>
              )}

              {/* Заголовок + текст */}
              <div>
                <h3 className="text-[32px] font-regular leading-tight">
                  {step.title}
                </h3>
                <p className="text-[17px] mt-2 leading-relaxed px-[40px]">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
