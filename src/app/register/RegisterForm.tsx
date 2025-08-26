"use client";

import AuthForm from "../../../components/AuthForm";
import * as z from "zod";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex justify-center bg-white">
      <div className="relative w-[1200px] min-h-screen flex flex-col items-center">
        
        <AuthForm
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
          onSubmit={(data: Record<string, any>) =>
            console.log("Register:", data)
          }
          checkPrivacy="login"
          haveAccount="register"
           forgot="register"
           goodleApple="Sing Up With "
        />
      </div>
    </div>
  );
}
