"use client";
import { useEffect, useState } from "react";

export default function ClientOnly({ children }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    console.log("✅ ClientOnly mounted");
  }, []);

  if (!hasMounted) return null;

  return <>{children}</>;
}
