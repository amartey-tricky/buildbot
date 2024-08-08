import { ContactEmail } from "@/components/email/contact";
import { Resend } from "resend";

import { ContactFormSchema } from "@/utils/schema/contactschema";
import type { ContactFormData } from "@/utils/schema/contactschema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function SendContactEmail(data: ContactFormData) {
  const result = ContactFormSchema.safeParse(data)

  if (result.success) {
    const { name, email, message } = result.data;
    try {
      const data = await resend.emails.send({
        from: "BuildBot GH <info@buildbotgh.com>",
        to: ["tonymortotsi@gmail.com"],
        subject: "Contact Form Submission",
        // text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
        react: ContactEmail({ name, email, message }),
      });      return { success: true, data };
    } catch (error) {
      return { success: false, error };
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}