"use client";

import { SendContactEmail } from "@/app/contact/actions";
import { ContactFormSchema } from "@/utils/schema/contactschema";
import type { ContactFormData } from "@/utils/schema/contactschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    const result = await SendContactEmail(data);

    if (result?.success) {
      toast.success("Message sent successfully");
      reset();
    } else {
      toast.error("Message not sent");
    }
    // try {
    //   // Simulate an API call
    //   await new Promise((resolve) => setTimeout(resolve, 2000));
    //   console.log(data);
    //   toast.success("Message sent successfully");
    //   reset()
    //   // Handle form submission
    // } catch (error) {
    //   console.error("Submission error:", error);
    //   toast.error("Message not sent");
    // }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register("name")}
          placeholder="Name"
          autoComplete="true"
          className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>
      <div>
        <input
          {...register("email")}
          placeholder="Email"
          autoComplete="true"
          className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
      <div>
        <textarea
          {...register("message")}
          placeholder="Message"
          className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 resize-none"
          rows={4}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
          isSubmitting
            ? "bg-blue-300 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
