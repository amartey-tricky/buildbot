"use client";

import { Toaster } from "sonner";

export default function ToasterProvider({
  children,
}: { children: React.ReactNode }) {
  return (
    <>
      {/* {children} */}
      <Toaster position="top-center" richColors expand />
    </>
  );
}
