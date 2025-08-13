"use client";

import { useRouter } from "next/navigation";
import { Button } from "./Index";

export default function ClearSearchButton({ children, variant = "link", className = "" }) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/blog");
  };

  return (
    <Button variant={variant} className={className} onClick={handleClick}>
      {children}
    </Button>
  );
}
