"use client";

import { ContactFormSchema } from "@/utils/schema/contactschema";
import type { ContactFormData } from "@/utils/schema/contactschema";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useForm } from "react-hook-form";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: valibotResolver(ContactFormSchema),
  });

  return (
    <form>
      
    </form>
  )
}
