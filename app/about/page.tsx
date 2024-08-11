import { CldImage } from "@/components/cldimage";
import Link from "next/link";
import { bitter, timmana } from "@/utils/font";

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
      <section className="w-full max-w-screen-xl px-6 py-4 md:px-12 md:py-14 space-y-8">
        <article>
          <h2
            className={`${bitter.className} text-2xl font-semibold text-center md:text-4xl p-4 md:p-8`}
          >
            Our Story
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
          <p className={`${timmana.className} text-lg text-justify pb-4 md:pb-8`}>
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

          <p className={`${timmana.className} text-lg text-justify pb-4 md:pb-8`}>
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
