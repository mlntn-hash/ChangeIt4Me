"use client";
import React, { useState } from 'react';
import Link from "next/link";


const Footer = () => {
  // Состояние для email подписки
  const [email, setEmail] = useState('');

  // Обработчик подписки на новостную рассылку
  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with email: ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.15)] w-[1300px] rounded-[19px] pt-[40px] pb-[20px] pl-[30px] pr-[30px]">
      <div className="max-w-[1300px] mx-auto px-4">
        {/* Основной контент футера */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:[grid-template-columns:1.8fr_0.8fr_0.7fr_0.8fr_1.3fr] gap-8 mb-12">
          
          {/* Левая колонка - Логотип и описание */}
          <div className="lg:col-span-1 pr-[30px]">
            {/* Логотип компании */}
            <div className="flex items-center  mb-0">
                    <div> {/*1*/}
  <Link href="/">
    <img 
      src="/logo.webp" 
      alt="ChangeIt4Me" 
      className="h-[67px] w-[137px] cursor-pointer" 
    />
  </Link>
</div>
            </div>
            
            {/* Описание платформы */}
            <p className="text-[#181818] text-sm leading-relaxed text-[15px] pt-[20px] font-light">
              A modern platform for key-for-key exchange.
              We help people swap cars, real estate, and
              goods directly — without overpaying or using
              middlemen. Fair, simple, and free.
            </p>
          </div>

          {/* Колонка категорий */}
          <div className=''>{/*2*/}
            <h3 className="font-semibold text-[#181818] mb-4 text-center text-[22px]">Categories</h3>
            <ul className="space-y-3 text-center">
              {/* Ссылки на основные категории товаров */}
              <li>
                <a href="/cars" className="text-[17px] text-[#181818] hover:text-[#2d4e30] text-sm transition-colors">
                  Cars
                </a>
              </li>
              <li>
                <a href="/real-estate" className="text-[17px] text-[#181818] hover:text-[#2d4e30] text-sm transition-colors">
                  Real Estate
                </a>
              </li>
              <li>
                <a href="/marketplace" className="text-[17px] text-[#181818] hover:text-[#2d4e30] text-sm transition-colors">
                  Marketplace
                </a>
              </li>
            </ul>
          </div>

          {/* Колонка аккаунта */}
          <div className=''>{/*3*/}
            <h3 className="font-semibold text-[#181818] mb-4 text-center text-[22px]">Account</h3>
            <ul className="space-y-3 text-center">
              {/* Ссылки для управления аккаунтом */}
              <li>
                <a href="/login" className="text-[#181818] hover:text-[#2d4e30] text-sm transition-colors text-[17px]">
                  Log in
                </a>
              </li>
              <li>
                <a href="/register" className="text-[#181818] hover:text-[#2d4e30] text-sm transition-colors text-[17px]">
                  Register
                </a>
              </li>
            </ul>
          </div>

          {/* Правая колонка - Контакты и подписка */}
          <div>{/*4*/}
            {/* Секция контактов */}
            <div className="mb-6 pr-[10px]">
              <h3 className="font-semibold text-[#181818] mb-4 text-center text-[22px]">Contacts</h3>
              <div className="space-y-2 text-center">
               {/* Телефон */}
               <p className="text-[#181818] text-[17px]">
                <a 
                href="tel:+0000000000" 
                className="hover: [#2d4e30] transition-colors"
                    >
                      + 00 000 000 00
                 </a>
                    </p>

                 {/* Email */}
                  <p className="text-[#181818] text-[17px]">
                    <a 
                   href="mailto:changeit4me@gmail.com" 
                   className="hover:[#2d4e30] transition-colors"
                       >
                  changeit4me@gmail.com
                      </a>
                     </p>
                 </div>

              
              {/* Социальные сети */}
              <div className="flex space-x-3 mt-4 justify-center">
                {/* Facebook */}
                <a href="#" className="w-[35px] h-[35px] bg-black rounded-full flex items-center justify-center ">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                {/* WhatsApp */}
                <a href="#" className="w-[35px] h-[35px] bg-black rounded-full flex items-center justify-center ">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488"/>
                  </svg>
                </a>
                
                {/* Telegram */}
                <a href="#" className="w-[35px] h-[35px] bg-black rounded-full flex items-center justify-center ">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            </div>
          <div> <div>
            {/* Секция подписки на новости */}
            
              <h3 className="font-semibold text-gray-800 mb-5 text-center text-[22px]">Our newsletter</h3>
              <div className="space-y-3">
                {/* Поле ввода email */}
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-[244px] shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-[6px] px-3 h-[41px] bg-white focus:border-green-600 focus:outline-none"
                />
                {/* Кнопка подписки */}
                <button
                  onClick={handleSubscribe}
                  className="mt-[10px] w-[244px] text-[17px] shadow-[0_0_10px_rgba(0,0,0,0.15)] bg-[#376039] hover:bg-[#2d4e30] text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  Subscribe
                </button>
               
              </div>
              </div>
              </div>
        </div>

        {/* Нижняя часть футера - копирайт и ссылки */}
        <div className="pt-[20px]">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#181818]">
            {/* Копирайт */}
            <div className="mb-4 md:mb-0">
              © 2025 YourWebsite. All rights reserved.
            </div>
            
            {/* Ссылки на правовые документы */}
            <div className="flex space-x-6">
              <a href="/privacy" className="hover:text-[#181818] transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-[#181818] transition-colors">
                Terms & Conditions
              </a>
              <div className="flex items-center">
                <span>Created by </span>
                <span className="font-semibold ml-1">CV</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;