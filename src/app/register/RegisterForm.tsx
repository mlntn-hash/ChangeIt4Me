"use client";

import AuthForm from "../../../components/AuthForm";
import * as z from "zod";

// Типизация данных формы регистрации
interface RegisterFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function RegisterPage() {
  // Типизированный обработчик отправки формы
  const handleRegisterSubmit = (data: RegisterFormData) => {
    // Валидация совпадения паролей
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // В продакшене здесь будет API вызов
    // registerUser(data);
    
    // В development режиме можно логировать (опционально)
    // if (process.env.NODE_ENV === 'development') {
    //   console.log("Register data:", data);
    // }
    
    // Здесь должна быть логика регистрации
    // Например: redirect на страницу входа или dashboard
  };

  return (
    <div className="min-h-screen flex justify-center bg-white">
      <div className="relative w-[1200px] min-h-screen flex flex-col items-center">
        <AuthForm<RegisterFormData>
          title="Create Your Account"
          subtitle="Join the community and start swapping today!"
          submitText="Sign Up"
          fields={[
            {
              name: "fullName",
              type: "text",
              placeholder: "Full Name",
              validation: z.string().min(2, "Full name is required"),
            },
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
              validation: z.string().min(
                6,
                "Password must be at least 6 characters"
              ),
            },
            {
              name: "confirmPassword",
              type: "password",
              placeholder: "Confirm Password",
              validation: z.string().min(6, "Confirm your password"),
            },
          ]}
          onSubmit={handleRegisterSubmit}
          checkPrivacy="login"
          haveAccount="register"
          forgot="register"
          goodleApple="Sign Up With "
        />
      </div>
    </div>
  );
}