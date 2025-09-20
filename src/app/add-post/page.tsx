"use client";
import { useState } from "react";
import CarForm from "./auto";
import RealEstateForm from "./house";
import MarketplaceForm from "./marketplace";
import Header from "../header/header";
import Footer from "../footer/footer";
import Category from "../homePage/category";
import Link from "next/link";
import Image from "next/image";

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
   const [images, setImages] = useState<File[]>([]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).slice(0, 10); // максимум 10 файлов
      setImages(filesArray);
       }
  };

  return (
   
    <div className="bg-[#F8FAF7]">
      <Header/>
      <Category />
      <div className="w-[1300px] mx-auto pt-[50px] pb-[60px] gap-10px]">
      <div className="flex items-center gap-2 pb-[20px] text-[20px]">
  <Link href="/" className="hover:text-[#2d4e30] transition-colors duration-500 ease-in-out">
    Home
  </Link>
  <span className="text-[40px] font-light pb-[7px]">›</span>
  <Link href="/add-post" className="font-bold text-[20px] hover:text-[#2d4e30] transition-colors duration-500 ease-in-out">
    Post a New Ad
  </Link>
</div>
     <div className="bg-[#EDEEE6] py-[60px] px-[60px] rounded-[19px] mb-[50px]">
      <h1 className="text-[45px] font-regular mb-2">Adding a New Ad</h1>

      {/* Навигация по шагам */}
      <div className="flex gap-2 text-[20px] text-gray-500 mb-4 border-b border-gray-300 pb-2">
  {steps.map((s, i) => (
    <span
      key={i}
      className={`${i === step ? "font-bold text-black text-[20px]  border-[#507001] pb-1" : ""}`}
    >
      {s} {i < steps.length - 1 && (<span className="font-normal text-gray-500">{">"}</span>)}
    </span>
  ))}
</div>


      {/* Шаги */}
      {step === 0 && (
      <div className="flex items-start gap-4">
  {/* Левая иконка */}
  <Image
    src="/add1.svg"
    alt="Step 1"
    width={41}
    height={41}
    className="inline-block mt-2"
  />

  {/* Правый блок загрузки */}
   {/* Зона загрузки */}
      <label className="cursor-pointer pt-[40px] border-2 border-dashed rounded-lg p-6 text-center text-[#A6A6A6] bg-[#FFFFFD] w-[309px] h-[284px] flex flex-col items-center justify-center">
        <Image src="/image.svg" alt="Upload" width={85} height={85} />
        <span className="mt-2">Upload up to 10 images<br/>(JPG, PNG)</span>
        <input
          type="file"
          accept="image/png, image/jpeg"
          multiple
          className="hidden"
          onChange={handleUpload}
        />
      </label>

      {/* Превью загруженных */}
      <div className="flex flex-wrap gap-2">
        {images.map((file, i) => (
          <Image
            key={i}
            src={URL.createObjectURL(file)}
            alt={`Preview ${i}`}
            width={80}
            height={80}
            className="rounded-lg object-cover"
          />
        ))}
      </div>
    </div>


      )}

      {step === 1 && (
        <div>
        <div className="flex items-center gap-3 mb-4">
  <Image
    src="/add2.svg"
    alt="Step 1"
    width={41}
    height={41}
  />
  <p className="font-medium text-[38px]">Category Selection</p>
     </div>

          <div className="flex gap-6 text-[30px]">
  {["Car", "Real Estate", "Marketplace"].map((c) => (
    <label
      key={c}
      className={`flex items-center justify-center gap-3 px-6 py-4 rounded-lg cursor-pointer transition-all my-[30px]
        ${category === c ? "bg-white items-center border-none shadow-sm w-[277px] h-[68px]" : "border items-center border-transparent w-[277px] h-[68px]"}
      `}
    >
      <input
        type="radio"
        name="category"
        value={c}
        checked={category === c}
        onChange={() => setCategory(c)}
        className="hidden"
      />
      {/* кастомный кружок */}
      <span
        className={`w-[38px] h-[38px] rounded-full border flex items-center justify-center
          ${category === c ? "border-[#507001]" : "border-[#507001]"}
        `}
      >
        {category === c && (
          <span className="w-7 h-7 rounded-full bg-[#507001]"></span>
        )}
      </span>
      <span className={`${category === c ? "font-regular text-black flex justify-center" : "text-black flex justify-center"}`}>
        {c}
      </span>
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
      <div className="flex justify-end mt-6">
        <button
          onClick={prevStep}
          className="px-4 py-2 border rounded-md text-gray-600"
        >
          ← 
        </button>
        <button
          onClick={nextStep}
          className="px-4 py-2 bg-[#507001] text-white rounded-md w-[166px] ml-[20px]"
        >
          Next →
        </button>
      </div>
      </div>
      <Footer/>
    </div>
    </div>
  );
}

