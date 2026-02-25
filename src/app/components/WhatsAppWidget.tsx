"use client";

import React, { useState } from 'react';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "254720851489"; // WhatsApp number without + or spaces
  const webhookUrl = `https://wa.me/${phoneNumber}`;
  const prefilledMessage = "Hello, I'm interested in your services. Could you help me?";

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(prefilledMessage);
    window.open(`${webhookUrl}?text=${message}`, '_blank');
  };

  const handleQuickChat = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`${webhookUrl}?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      {/* WhatsApp Widget Container */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Chat Options Menu */}
        {isOpen && (
          <div className="bg-white shadow-lg rounded-lg p-4 mb-2 w-80 animate-fadeIn">
            <h3 className="font-semibold text-gray-800 mb-3">Start a conversation</h3>
            <div className="space-y-2">
              <button
                onClick={() => handleQuickChat("Hello, I'd like to know more about your services.")}
                className="w-full text-left p-3 hover:bg-green-50 rounded transition-colors text-sm text-gray-700"
              >
                📋 Learn about services
              </button>
              <button
                onClick={() => handleQuickChat("I'm interested in your pricing plans.")}
                className="w-full text-left p-3 hover:bg-green-50 rounded transition-colors text-sm text-gray-700"
              >
                💰 Pricing inquiry
              </button>
              <button
                onClick={() => handleQuickChat("Can we schedule a consultation?")}
                className="w-full text-left p-3 hover:bg-green-50 rounded transition-colors text-sm text-gray-700"
              >
                📞 Request consultation
              </button>
              <button
                onClick={() => handleQuickChat(prefilledMessage)}
                className="w-full text-left p-3 hover:bg-green-50 rounded transition-colors text-sm text-gray-700"
              >
                ✉️ Send a message
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center">
              Typically replies within minutes
            </p>
          </div>
        )}

        {/* Main WhatsApp Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => !isOpen && setIsOpen(true)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-200 transform hover:scale-110 flex items-center justify-center"
          aria-label="WhatsApp Chat"
          title="Chat with us on WhatsApp"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371 0-.57 0-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.025 0-2.04-.313-2.918-.903C8.86 5.49 8.203 4.9 7.66 4.154c-.543-.746-.856-1.622-.856-2.554 0-2.192 1.784-3.976 3.976-3.976 1.062 0 2.062.41 2.814 1.152.752.743 1.162 1.743 1.162 2.814 0 2.192-1.784 3.976-3.976 3.976zm8.126-8.854C15.039 2.867 12.285 1.871 9.36 1.871 4.649 1.871 0.88 5.64 0.88 10.35c0 1.893.483 3.736 1.404 5.371L1.07 23.697l8.054-2.716c1.542.845 3.276 1.291 5.056 1.291 4.711 0 8.48-3.768 8.48-8.48 0-2.265-.862-4.39-2.427-6.015Z" />
          </svg>
        </button>
      </div>

      {/* Backdrop to close menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-in-out;
        }
      `}</style>
    </>
  );
};

export default WhatsAppWidget;
