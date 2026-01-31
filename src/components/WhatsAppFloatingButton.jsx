import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "919717981853"; // ← change to your number (with country code)
const MESSAGE = "Hi! I came across your portfolio and would like to connect.";

export default function WhatsAppFloatingButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    MESSAGE
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-6 right-6 z-80
        flex items-center justify-center
        rounded-full shadow-lg
        bg-[#25D366] text-white
        transition-transform duration-300
        hover:scale-110
        active:scale-95

        /* Size */
        w-16 h-16
        md:w-14 md:h-14
        sm:w-12 sm:h-12
      "
    >
      <FaWhatsapp className="text-3xl sm:text-2xl" />
    </a>
  );
}
