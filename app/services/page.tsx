import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center w-full">
      <section className="px-6 py-4 md:px-12 md:py-14">
        <h1 className="font-bold text-4xl md:text-6xl text-center">Services</h1>
        <p className="text-center text-md text-slate-500">
          We offer a wide range of services to meet your financial needs.
        </p>
      </section>
    </main>
  );
}
