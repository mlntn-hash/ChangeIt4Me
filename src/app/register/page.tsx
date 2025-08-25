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

        
          {/* Форма */}
          <RegisterForm />
        </div>
      </div>
  )
}

