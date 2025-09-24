"use client";

import AuthForm from "../../../components/AuthForm";
import * as z from "zod";
import Link from "next/link";
import Image from 'next/image';

// Типизация данных формы входа
interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginPage() {
  // Типизированный обработчик отправки формы
  const handleLoginSubmit = (data: LoginFormData) => {
    // В продакшене здесь будет API вызов для входа
    // loginUser(data);
    
    // В development режиме можно логировать (опционально)
    // if (process.env.NODE_ENV === 'development') {
    //   console.log("Login data:", data);
    // }
    
    // Здесь должна быть логика входа:
    // 1. Отправка данных на сервер
    // 2. Сохранение токена
    // 3. Редирект на главную страницу или dashboard
  };

  return (
    <div className="min-h-screen flex justify-center bg-white">
      <div className="relative w-[1200px] min-h-screen flex flex-col items-center">
        <div className="absolute top-6 left-6 z-10">
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

        <AuthForm<LoginFormData>
          title="Welcome Back"
          subtitle="Log in to continue swapping."
          submitText="Log In"
          fields={[
            {
              name: "email",
              type: "email",
              placeholder: "Email",
              validation: z.string().email("Invalid email address"),
            },
            {
              name: "password",
              type: "password",
              placeholder: "Password",
              validation: z.string().min(6, "Password must be at least 6 characters"),
            },
          ]}
          onSubmit={handleLoginSubmit}
          checkPrivacy="register"
          forgot="login"
          haveAccount="login"
          goodleApple="Log in with "
        />
      </div>
    </div>
  );
}