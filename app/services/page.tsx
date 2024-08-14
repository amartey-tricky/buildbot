import Link from "next/link";

const Services = {
  [
    "id": 1,
  "title": "Financial Planning",
  "paragragh": "Financial planning is essential for achieving long-term financial success, providing a clear roadmap for reaching your specific goals, whether it's saving for retirement, securing your family's future, or making a major purchase. Our comprehensive approach considers all aspects of your financial life, allowing us to develop a personalized strategy that aligns with your values and aspirations. Regular reviews and adjustments ensure that your plan remains relevant and effective, giving you confidence in your financial future.",
  "link": "/",
  ],
}

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center w-full">
      <section className="px-6 py-4 md:px-12 md:py-14">
        <h1 className="font-bold text-4xl md:text-6xl text-center">Services</h1>
        <p className="text-center text-md text-slate-500">
          We offer a wide range of services to meet your financial needs.
        </p>
      </section>
      <section className="px-6 py-4 md:px-12 md:py-14">
        <h2 className="font-bold text-2xl md:text-4xl text-center">
          Financial Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="flex flex-col items-center justify-center p-4 md:p-8 bg-white rounded-lg shadow-md">
            <h3 className="font-bold text-xl md:text-2xl">Savings Plans</h3>
            <p className="text-center text-sm text-slate-500">
              Get started with a savings plan that suits your needs and goals.
            </p>
            <Link href="/contact" className="mt-4">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
