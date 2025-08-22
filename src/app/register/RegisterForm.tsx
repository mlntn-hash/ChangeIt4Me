"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const schema = z
  .object({
    fullName: z.string().min(2, "Full name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="min-h-screen flex  justify-center bg-#EDEEE6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5 w-[600px] p-8 rounded-md"
      >
        {/* Full Name */}
        <div>
          <input
            type="text"
            placeholder="Full Name"
            {...register("fullName")}
            className="w-full shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-md px-3 h-[41px] bg-white focus:border-green-600 focus:outline-none"
          />
          {errors.fullName && (
            <p className="text-sm text-red-600 mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="w-full shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-md px-3 h-[41px] bg-white focus:border-green-600 focus:outline-none"
          />
          {errors.email && (
            <p className="text-sm text-red-600 mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="w-full shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-md px-3 h-[41px] bg-white focus:border-green-600 focus:outline-none"
          />
          {errors.password && (
            <p className="text-sm text-red-600 mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
            className="w-full shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-md px-3 h-[41px] bg-white focus:border-green-600 focus:outline-none"
          />
          {errors.confirmPassword && (
            <p className="text-sm text-red-600 mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Submit + Agreement */}
        <div className="flex items-center justify-between gap-4 pt-4 pb-4">
          <button
            type="submit"
            className="rounded-md text-[17px] bg-green-800 px-6 w-[166px] h-[41px] text-white hover:bg-green-700 transition"
          >
            Sign Up
          </button>
          <p className="text-xs text-gray-600 text-[17px]">
            I agree to the{" "}
            <a href="#" className="underline">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>
          </p>
        </div>

        {/* Social Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-3 mt-4">
          <button
            type="button"
            className="flex shadow-[0_0_10px_rgba(0,0,0,0.15)] items-center justify-center space-x-2 rounded-md border border-gray-300 bg-white h-[41px] w-[243px] text-gray-700 hover:bg-gray-50 transition"
          >
           
            <span>Sign Up With Google</span>
             <FcGoogle size={30} />
          </button>
          <button
            type="button"
            className="flex shadow-[0_0_10px_rgba(0,0,0,0.15)] items-center justify-center space-x-2 rounded-md border border-gray-300 bg-white h-[41px] w-[243px] text-gray-700 hover:bg-gray-50 transition"
          >
            
            <span>Sign Up With Apple</span>
            <FaApple size={30} />
          </button>
        </div>
      </form>
    </div>
  );
}
