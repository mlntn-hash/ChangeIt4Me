"use client";
import { useState } from "react";
import CarForm from "./auto";
import RealEstateForm from "./house";
import MarketplaceForm from "./marketplace";
import Header from "../header/header";
import Footer from "../footer/footer";

const steps = [
  "Add photos",
  "Category Selection",
  "Basic Information",
  "Item Details",
  "Location",
  "Contact Information",
];

export default function MultiStepForm() {
  const [step, setStep] = useState(0);
  const [category, setCategory] = useState<string | null>(null);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="p-6 rounded-2xl bg-[#f2f4f0]">
      <Header/>
      <h1 className="text-2xl font-semibold mb-2">Adding a New Ad</h1>

      {/* Навигация по шагам */}
      <div className="flex gap-2 text-gray-500 mb-4">
        {steps.map((s, i) => (
          <span
            key={i}
            className={`${i === step ? "font-bold text-black" : ""}`}
          >
            {s} {i < steps.length - 1 && ">"}
          </span>
        ))}
      </div>

      {/* Шаги */}
      {step === 0 && (
        <div>
          <p className="mb-2 font-medium">1. Upload Photos</p>
          <div className="border-2 border-dashed rounded-lg p-6 text-center text-gray-500">
            Upload up to 10 images (JPG, PNG)
          </div>
        </div>
      )}

      {step === 1 && (
        <div>
          <p className="mb-2 font-medium">2. Category Selection</p>
          <div className="flex gap-6">
            {["Car", "Real Estate", "Marketplace"].map((c) => (
              <label
                key={c}
                className={`px-4 py-2 border rounded-lg cursor-pointer ${
                  category === c ? "bg-green-100 border-green-600" : ""
                }`}
              >
                <input
                  type="radio"
                  name="category"
                  value={c}
                  checked={category === c}
                  onChange={() => setCategory(c)}
                  className="hidden"
                />
                {c}
              </label>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <p className="mb-2 font-medium">4. Item Details</p>
          {category === "Car" && <CarForm />}
          {category === "Real Estate" && <RealEstateForm />}
          {category === "Marketplace" && <MarketplaceForm />}
        </div>
      )}

      {/* Кнопки управления */}
      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          className="px-4 py-2 border rounded-md text-gray-600"
        >
          ← Back
        </button>
        <button
          onClick={nextStep}
          className="px-4 py-2 bg-green-700 text-white rounded-md"
        >
          Next →
        </button>
      </div>
      <Footer/>
    </div>
  );
}

