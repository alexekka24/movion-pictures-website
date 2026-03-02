import { FaWhatsapp } from "react-icons/fa";
import Button from "../common/Button";
import { ContactPageContent } from "../../../public/assets/data/CONTACTPAGECONTENT";

const WHATSAPP_NUMBER = ContactPageContent.whatsapp.number;
const MESSAGE = ContactPageContent.whatsapp.message;

export const WhatsAppFloatingButton = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    MESSAGE
  )}`;

  return (
    <>
      <style>
        {`
          @keyframes whatsapp-pulse {
            0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4); }
            70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
            100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
          }
          .whatsapp-btn {
            background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
            animation: whatsapp-pulse 2s infinite;
          }
        `}
      </style>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          fixed bottom-6 right-6 z-[80]
          flex items-center justify-center
          rounded-full shadow-2xl
          whatsapp-btn text-white
          transition-all duration-300
          hover:scale-110 hover:brightness-110
          active:scale-95
          border border-white/20 backdrop-blur-sm
          /* Size */
          w-14 h-14
          md:w-16 md:h-16
        "
      >
        <FaWhatsapp className="text-3xl md:text-3xl drop-shadow-md" />
      </a>
    </>
  );
}
