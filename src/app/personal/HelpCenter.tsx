import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function HelpCenter() {
  const [openFaq, setOpenFaq] = useState(0); // First FAQ is open by default

  const faqItems = [
    {
      question: "How do I create a new listing?",
      answer: "To create a listing, go to 'Add New Listing', select a category (Car, Real Estate, Goods), fill in the details, upload photos, and click 'Post An Ad'."
    },
    {
      question: "Is it free to post a listing?",
      answer: "Yes, posting basic listings is completely free on our platform."
    },
    {
      question: "Can I edit or delete my listing after publishing?",
      answer: "Yes, you can edit or delete your listings at any time through your 'My Listings' section."
    },
    {
      question: "How do swap offers work?",
      answer: "Swap offers allow you to exchange items with other users without using money. Simply browse items and make swap proposals."
    },
    {
      question: "What can I exchange on this platform?",
      answer: "You can exchange cars, real estate, and various marketplace goods. All exchanges are handled directly between users."
    },
    {
      question: "How do I contact another user?",
      answer: "You can contact other users through our messaging system by clicking on their listings or using the contact information provided."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-[45px] font-medium mb-4 border-b border-gray-300 pb-2 pt-[10px] ">
            Help Center
        </h1>
        <p className="text-[20px] text-[#666666] font-light italic">Get support and answers.</p>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h3 className="text-[38px] font-regular text-[#181818] mb-6">FAQ</h3>
        
        <div className="space-y-2">
          {faqItems.map((item, index) => (
            <div key={index} className="shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-[10px] overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-4 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
              >
                <span className="text-[20px] font-regular text-[#181818]">
                  {item.question}
                </span>
                {openFaq === index ? (
                  <ChevronUp className="w-5 h-5 text-[#666666]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#666666]" />
                )}
              </button>

              {/* Плавное раскрытие */}
              <div
                className={`px-4 overflow-hidden transition-all duration-500 ease-in-out ${
                  openFaq === index ? 'max-h-96 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-[20px] text-[#181818] leading-relaxed pt-3">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Support Section */}
      <div>
        <h3 className="text-[38px] font-regular text-[#181818] mb-4">Contact Support</h3>
        <p className="text-[#181818] text-[20px] leading-relaxed">
          If you did not find the answer to your question, please contact us at{' '}
          <a 
            href="mailto:support@example.com" 
            className="text-[#181818] text-[20px] hover:text-[#2d4e30] transition-colors duration-300"
          >
            support@example.com
          </a>
        </p>
      </div>
    </div>
  );
}
