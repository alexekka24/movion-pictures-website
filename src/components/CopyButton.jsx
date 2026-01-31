import { Copy, Check } from "lucide-react";
import { useState } from "react";

const CopyButton = ({ value, label }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      navigator.vibrate?.(30); // mobile haptic feedback
      setTimeout(() => setCopied(false), 1500);
    } catch {
      alert("Copy failed");
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="ml-2 inline-flex items-center gap-1 text-sm opacity-70 hover:opacity-100 transition
                 active:scale-95 focus:outline-none cursor-pointer"
      aria-label={`Copy ${label}`}
    >
      {copied ? <Check size={16} /> : <Copy size={16} />}
      <span className="sr-only">Copy</span>
    </button>
  );
};

export default CopyButton;
