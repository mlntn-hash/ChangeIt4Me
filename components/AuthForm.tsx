"use client";

import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";

type Field = {
  name: string;
  type: string;
  placeholder: string;
  validation: z.ZodTypeAny;
};

// Используем generic для гибкости типов
interface AuthFormProps<T extends FieldValues = FieldValues> {
  title: string;
  subtitle: string;
  submitText: string;
  fields: Field[];
  onSubmit: (data: T) => void;
  haveAccount: "login" | "register";
  checkPrivacy: "login" | "register";
  forgot: "login" | "register";
  goodleApple: string;
}

export default function AuthForm<T extends FieldValues = FieldValues>({
  title,
  subtitle,
  submitText,
  fields,
  onSubmit,
  haveAccount,
  checkPrivacy,
  forgot,
}: AuthFormProps<T>) {
  // Создаем динамическую схему валидации
  const schema = z.object(
    fields.reduce((acc, field) => {
      acc[field.name] = field.validation;
      return acc;
    }, {} as Record<string, z.ZodTypeAny>)
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  // Простой обработчик без лишней типизации
  const handleFormSubmit = (data: FieldValues) => {
    onSubmit(data as T);
  };

  return (
    <div className="mt-30 w-[837px] h-auto rounded-2xl bg-[#F1F3EB] pb-10 pt-15 shadow-lg">
      <h2 className="text-center font-normal text-[38px] text-[#181818]">
        {title}
      </h2>
      <p className="mt-5 text-center text-[32px] text-[#181818]">{subtitle}</p>

      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="space-y-5 w-[600px] mx-auto p-8"
      >
        {fields.map((field) => (
          <div key={field.name}>
            <input
              type={field.type}
              placeholder={field.placeholder}
              {...register(field.name)}
              className="w-full shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-md px-3 h-[41px] bg-white focus:border-green-600 focus:outline-none"
            />
            {errors[field.name] && (
              <p className="text-sm text-red-600 mt-1">
                {String(errors[field.name]?.message)}
              </p>
            )}
          </div>
        ))}

        <div className="flex items-center justify-center gap-4 pt-[20px]">
          <button
            type="submit"
            className="rounded-md text-[17px] bg-[#507001] px-6 w-[166px] h-[41px] text-white hover:bg-[#376039] transition"
          >
            {submitText}
          </button>
          <div className="text-[17px] text-[#181818]">
            {checkPrivacy === "login" ? (
              <>
                I agree to the{" "}
                <Link href="/" className="underline text-[#181818] ml-1">
                  Terms of Use
                </Link>{" "}
                and
                <Link href="/" className="underline text-[#181818] ml-1">
                  Privacy Policy
                </Link>
              </>
            ) : (
              <>
                <label className="flex items-center space-x-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    className="w-[22px] h-[22px] appearance-none border-[1.5px] border-[#181818] rounded-sm 
                       checked:bg-none checked:border-[#181818] 
                       flex items-center justify-center
                       transition duration-200
                       checked:after:content-['✔'] checked:after:text-[#181818] checked:after:text-sm"
                  />
                  <span className="text-[#181818]">Remember me</span>
                </label>
              </>
            )}
          </div>
        </div>

        {/* блок з forgot */}
        <p className="flex justify-center text-[17px] text-[#181818] pt-[0px]">
          {forgot === "login" ? (
            <Link href="/password-recovery" className="underline text-[#181818] ml-1 pt-[20px]">
              Forgot your password?
            </Link>
          ) : null}
        </p>

        {/* блок з переходом */}
        <p className="flex justify-center text-[17px] text-[#181818] pb-[20px]">
          {haveAccount === "login" ? (
            <>
              Don&apos;t have an account?{" "}
              <Link href="/register" className="underline text-[#181818] ml-1">
                Sign Up
              </Link>
            </>
          ) : (
            <>
              Do you have an account?{" "}
              <Link href="/login" className="underline text-[#181818] ml-1">
                Log In
              </Link>
            </>
          )}
        </p>
      </form>
    </div>
  );
}