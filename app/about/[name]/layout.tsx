import Link from "next/link";

const Services = [
  {
    id: 1,
    link: "financial-planning",
    title: "Financial Planning",
  },
  {
    id: 2,
    link: "investment-management",
    title: "Investment Management",
  },
  {
    id: 3,
    link: "retirement-planning",
    title: "Retirement Planning",
  },
  {
    id: 4,
    link: "estate-planning",
    title: "Estate Planning",
  },
  {
    id: 5,
    link: "insurance-solutions",
    title: "Insurance Solutions",
  },
  {
    id: 6,
    link: "debt-management",
    title: "Debt Management",
  },
  {
    id: 7,
    link: "education-planning",
    title: "Education Planning",
  },
];

export default function ServiceLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen">
      <aside className="hidden lg:flex h-auto w-[30%] px-6 py-4 md:px-12 md:py-14">
        <div className="flex flex-col items-center p-4 border-b-2 border-gray-300 rounded-lg shadow-md">
          <h2 className="font-bold text-2xl md:text-4xl">Services</h2>
          <div className="gap-4 md:gap-6 flex flex-col items-center mt-8">
            {Services.map((service) => (
              <Link
                key={service.id}
                href={`/about/${service.link}`}
                className="cursor-pointer p-4 rounded-md shadow-md font-semibold"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </aside>
      <section className="px-6 py-4 md:px-12 md:py-14">{children}</section>
    </main>
  );
}
