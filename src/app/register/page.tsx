"use client";
import RegisterForm from "./RegisterForm";
import Link from "next/link";
import Image from 'next/image';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex justify-center bg-white">
      {/* Контейнер с фиксированной шириной */}
      <div className="relative w-[1200px] min-h-screen flex flex-col items-center">
        <div className="absolute top-6 left-6 z-50">
      <Link href="/">
    <Image 
      src="/logo2.png" 
      alt="ChangeIt4Me" 
      width={193} 
      height={64} 
      className="h-[64px] w-[193px] cursor-pointer" 
         />
      </Link>
       </div>
          {/* Форма */}
          <RegisterForm />
        </div>
      </div>
  )
}

