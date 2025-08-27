// components/HowItWorks.tsx
import React from "react";

const steps = [
  {
    number: "1",
    title: "Post Your Offer",
    text: "List your car, property, or item – and what you want in return."
  },
  {
    number: "2",
    title: "Find Your Perfect Swap",
    text: "Browse offers and connect with people looking to swap."
  },
  {
    number: "3",
    title: "Make the Deal",
    text: "Agree on the terms and exchange directly – no fees, no hassle."
  }
];

export default function HowItWorks() {
  return (
    <section className="w-[1300px] h-[410px] mx-auto rounded-[15px] mb-[100px] bg-[#EDEEE6]">
      <div className="w-full max-w-[1300px] mx-auto py-12 text-[#181818]">
        <h2 className="text-[38px] font-regular text-center mb-10">
          How It Works?
        </h2>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {steps.map((step) => (
    <div key={step.number} className="flex flex-col items-center text-center gap-8">
      {/* Кружок с номером */}
      <div className="w-[80px] h-[80px] bg-[#669B6C] rounded-full text-white flex items-center justify-center text-[32px] font-semibold">
        {step.number}
      </div>

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
