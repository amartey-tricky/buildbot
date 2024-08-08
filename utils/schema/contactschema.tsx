import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(3, "Enter your name"),
  email: z.string().email("Enter a valid email address"),
  message: z.string().min(3, "Enter a message"),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;
