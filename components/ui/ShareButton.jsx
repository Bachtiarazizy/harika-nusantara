"use client";

import { Share2 } from "lucide-react";
import { Button } from "./Index";

export default function ShareButton({ title, excerpt, className = "" }) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link berhasil disalin!");
    }
  };

  return (
    <Button variant="ghost" className={className} onClick={handleShare}>
      <Share2 className="w-4 h-4 mr-2" />
      Share
    </Button>
  );
}
