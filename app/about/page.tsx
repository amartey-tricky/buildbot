import { CldImage } from "@/components/cldimage";
import Link from "next/link";
import { bitter, timmana } from "@/utils/font";

const Services = [
  {
    id: 1,
    title: "Financial Planning",
    name: "financial-planning",
    paragragh:
      "Financial planning is essential for achieving long-term financial success, providing a clear roadmap for reaching your specific goals, whether it's saving for retirement, securing your family's future, or making a major purchase. Our comprehensive approach considers all aspects of your financial life, allowing us to develop a personalized strategy that aligns with your values and aspirations. Regular reviews and adjustments ensure that your plan remains relevant and effective, giving you confidence in your financial future.",
    Link: "",
  },
  {
    id: 2,
    title: "Investment Management",
    name: "investment-management",
    paragragh:
      "Investment management focuses on growing your wealth through strategic, customized investment strategies that align with your goals and risk tolerance. Our disciplined approach includes building diversified portfolios, managing risk, and monitoring performance to achieve consistent returns. We adapt our strategies to changing market conditions and your evolving needs, ensuring that your investments are managed with care and precision to help you reach your financial objectives.",
    Link: "",
  },
  {
    id: 3,
    title: "Retirement Planning",
    name: "retirement-planning",
    paragragh:
      "Retirement planning is crucial for ensuring a secure and sustainable income stream in your later years. We help you build a personalized retirement plan that assesses your current financial situation, sets realistic goals, and implements strategies for saving, investing, and withdrawing funds efficiently. Regular reviews keep your plan on track, allowing you to retire with confidence, knowing that your financial future is secure.",
    Link: "",
  },
  {
    id: 4,
    title: "Estate Planning",
    name: "estate-planning",
    paragragh:
      "Estate planning ensures that your legacy is preserved and your loved ones are protected after you're gone. We work with you to create a comprehensive estate plan that reflects your wishes, including wills, trusts, and other legal instruments. Our services help minimize taxes and legal fees, providing peace of mind that your assets will be distributed according to your desires and that your family will be cared for.",
    Link: "",
  },
  {
    id: 5,
    title: "Insurance Solutions",
    name: "insurance-solutions",
    paragragh:
      "Insurance is a vital part of protecting your financial well-being, offering a safety net against life's uncertainties. Our insurance solutions help you manage risk by selecting the right policies to cover your home, health, income, and more. We assess your current coverage, identify gaps, and provide ongoing support to ensure your protection remains adequate and cost-effective, safeguarding your financial future.",
    Link: "",
  },
  {
    id: 6,
    title: "Debt Management",
    name: "debt-management",
    paragragh:
      "Debt management helps you regain control of your finances by providing personalized solutions to pay down debt, reduce interest costs, and improve financial health. We develop a customized repayment plan, which may include debt consolidation, and offer ongoing support to help you stay on track. Our goal is to guide you towards a debt-free future, empowering you to achieve financial freedom.",
    Link: "",
  },
  {
    id: 7,
    title: "Education Planning",
    name: "education-planning",
    paragragh:
      "Education planning ensures that your children have the financial resources needed to pursue their academic goals. We develop a personalized savings plan that balances growth and risk, maximizing contributions and taking advantage of tax-advantaged accounts. Our services also provide guidance on financial aid and scholarships, helping you build a strong financial foundation for your children's future success.",
    Link: "",
  },
];

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <section className="px-6 py-4 md:px-12 md:py-14">
        <h1
          className={`${bitter.className} text-4xl font-bold text-center mb-4 md:text-6xl`}
        >
          About Us
        </h1>
        <p className="text-center text-sm text-slate-500">
          Get to know us. Learn about our team. Find out what we do. Discover
          who we are, and what we do.
        </p>
      </section>
      <section className="w-full max-w-screen-xl px-6 py-4 md:px-12 md:py-14 space-y-6">
        <article>
          <h2
            className={`${bitter.className} text-2xl font-semibold text-center md:text-4xl p-4 md:p-8`}
          >
            Who We Are
          </h2>
          <p
            className={`${timmana.className} text-lg text-justify pb-4 md:pb-8`}
          >
            Buildbot GH is a Financial House that provides a platform for select
            financial institutions to connect with our customers. We are a team
            of highly skilled professionals who are passionate about helping our
            customers succeed. We are committed to providing the best possible
            service to our customers and are dedicated to delivering results
            that exceed our customers' expectations. We believe that our
            customers are our greatest asset and we are committed to ensuring
            that they receive the best possible service from us. We are a team
            of highly skilled professionals who are passionate about helping our
            customers succeed.
          </p>
          <CldImage src="/" alt="Story picture" width={500} height={300} />
        </article>
        <article>
          <h2
            className={`${bitter.className} text-2xl font-semibold text-center md:text-4xl p-4 md:p-8`}
          >
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {Services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col items-center justify-center p-4 md:p-8 bg-white rounded-lg shadow-md"
              >
                <h3 className="font-bold text-xl md:text-2xl">
                  {service.title}
                </h3>
                <p className="text-justify text-sm text-slate-500 p-4">
                  {service.paragragh}
                </p>
                <Link
                  href={`/about/${service.name}`}
                  prefetch={false}
                  className="mt-4 cursor-pointer text-blue-500 hover:underline hover:text-blue-700"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </article>
        <article>
          <h2
            className={`${bitter.className} text-2xl font-semibold text-center md:text-4xl p-4 md:p-8`}
          >
            Our Mission
          </h2>
          <p
            className={`${timmana.className} text-lg text-justify pb-4 md:pb-8`}
          >
            Empowering individuals and families to build a strong financial
            foundation is at the heart of our mission in Ghana. We believe that
            financial literacy and access to tailored financial services are
            critical tools for achieving long-term stability and success. By
            providing comprehensive financial education and innovative products,
            we help our clients make informed decisions that lay the groundwork
            for a secure future. Whether it's through savings plans, investment
            opportunities, or personalized financial advice, our goal is to
            ensure that every Ghanaian has the resources and knowledge needed to
            take control of their financial destiny.
          </p>
          <p
            className={`${timmana.className} text-lg text-justify pb-4 md:pb-8`}
          >
            In a rapidly evolving economy like Ghana's, we recognize the
            importance of adaptability and resilience. Our services are designed
            to meet the unique challenges faced by individuals and families in
            various stages of life. We work closely with our clients to
            understand their specific needs, offering solutions that are not
            only effective but also sustainable. From young professionals just
            starting their careers to families planning for their children's
            education, we are committed to providing the tools and support
            necessary for every step of their financial journey. Our approach is
            holistic, focusing not just on immediate gains but on building
            lasting wealth that can be passed down through generations.
          </p>

          <p
            className={`${timmana.className} text-lg text-justify pb-4 md:pb-8`}
          >
            At the core of our efforts is a deep commitment to community
            empowerment. We see financial education as a means of lifting entire
            communities, one family at a time. By fostering a culture of
            savings, investment, and financial planning, we are contributing to
            the overall economic growth and development of Ghana. Our vision is
            to create a ripple effect where financially empowered individuals
            inspire others, leading to a stronger, more resilient nation. In
            every interaction, we strive to make a positive impact, ensuring
            that the bricks of financial security we help our clients lay today
            will support them, their families, and their communities for years
            to come.
          </p>
        </article>
      </section>
    </main>
  );
}
