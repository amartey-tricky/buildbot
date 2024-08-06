import * as v from "valibot";

export const ContactFormSchema = v.object({
  name: v.pipe(v.string(), v.nonEmpty("Enter your name")),
  email: v.pipe(v.string(), v.email("Enter a valid email address")),
  message: v.pipe(v.string(), v.nonEmpty("Enter a message to us")),
});

export type ContactFormData = v.InferInput<typeof ContactFormSchema>;
