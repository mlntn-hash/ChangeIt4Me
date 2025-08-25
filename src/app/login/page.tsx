"use client";

import AuthForm from "../../../components/AuthForm";
import * as z from "zod";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex justify-center bg-white">
      <div className="relative w-[1400px] min-h-screen flex flex-col items-center">
        <div className="absolute top-6 left-6">
          <img src="/logo.webp" alt="ChangeIt4Me" className="h-10" />
        </div>

        <AuthForm
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
          onSubmit={(data) => console.log("Login:", data)}
                    checkPrivacy="register"
          forgot="login"
          haveAccount="login"
          goodleApple="Log in with "
        />
      </div>
    </div>
  );
}
