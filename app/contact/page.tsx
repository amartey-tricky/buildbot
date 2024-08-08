import { ContactForm } from "@/components/contactform";
import { platypi } from "@/utils/font";

export default function Page() {
  return (
    <main  className="flex min-h-screen flex-col items-center">
      <section className="px-6 py-4 md:px-12 md:py-14">
        <h1 className={`${platypi.className} text-4xl md:text-6xl font-bold text-center`}>Get In Touch With Us</h1>
      </section>
      <section className="w-full max-w-md mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-14">
        <ContactForm />
      </section>
    </main>
  )
}