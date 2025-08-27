import Header from "../header/header";
import Footer from "../footer/footer";

export default function homePage() {
  return (
    <div className="min-h-screen flex justify-center bg-white">
      {/* Контейнер с фиксированной шириной */}
      <div className="relative w-[1200px] min-h-screen flex flex-col items-center ">
        
             {/* Форма */}
          <Header />
          <div className="h-[140px] mt-[100px]">
            Содержание сайта
          </div>
          <Footer />

        </div>
        </div>
      
      
  )
}
