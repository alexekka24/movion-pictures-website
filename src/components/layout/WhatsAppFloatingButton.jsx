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
        md:w-16 md:h-16
        sm:w-12 sm:h-12
      "
    > 
      <div className="flex justify-center items-end">
        <Button text={<FaWhatsapp />} variant="simple" size="lg" className="text-3xl sm:text-2xl"  />
      </div>
    </a>
  );
}
