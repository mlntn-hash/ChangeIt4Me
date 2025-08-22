import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex justify-center bg-white">
      {/* Контейнер с фиксированной шириной */}
      <div className="relative w-[1400px] min-h-screen flex flex-col items-center">
        
       
        <div className="absolute top-6 left-6">
          <img
            src="/logo.webp"
            alt="ChangeIt4Me"
            className="h-10"
          />
        </div>

        {/* Карточка с формой */}
        <div className="mt-30 w-[837px] h-[704px] rounded-2xl bg-[#F1F3EB] p-20 shadow-lg">
          {/* Заголовки */}
          <h2 className="text-center font-normal text-[38px] text-[#181818]">
            Create Your Account
          </h2>
          <p className="mt-5 text-center text-[32px] text-[#181818]">
            Join the community and start swapping today!
          </p>

          {/* Форма */}
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

