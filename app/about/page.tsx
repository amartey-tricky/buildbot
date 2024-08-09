import { CldImage } from "@/components/cldimage";
import Link from "next/link";
import { bitter, timmana } from "@/utils/font";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <section className="px-6 py-4 md:px-12 md:py-14">
        <h1 className={`${bitter.className} text-4xl font-bold text-center mb-4 md:text-6xl`}>About Us</h1>
        <p className="text-center text-sm text-slate-500">
          Get to know us. Learn about our team. Find out what we do. Discover
          who we are, and what we do.
        </p>
      </section>
      <section className="w-full max-w-md mx-auto px-6 py-4 md:px-12 md:py-14 space-y-8">
        <article className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <CldImage src="/" width={500} height={300} alt="About picture" className="rounded-lg" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-center md:text-4xl">Our Story</h2>
            <p className={`${timmana.className} text-lg text-justify`}>
              Buildbot GH is a Financial House that provides a platform for
              select financial institutions to connect with our customers. We
              are a team of highly skilled professionals who are passionate
              about helping our customers succeed. We are committed to providing
              the best possible service to our customers and are dedicated to
              delivering results that exceed our customers' expectations. We
              believe that our customers are our greatest asset and we are
              committed to ensuring that they receive the best possible service
              from us. We are a team of highly skilled professionals who are
              passionate about helping our customers succeed.
            </p>
          </div>
          </article>
          <article className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <CldImage src="/" width={500} height={300} alt="Mission picture" className="rounded-lg" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-center md:text-4xl">Our Mission</h2>
            <p className={`${timmana.className} text-lg text-justify`}>
              The mission of Buildbot GH is to empower individuals and families to build a strong financial foundation, one brick at a time in Ghana.  
            </p>
          </div>
        </article>
      </section>
    </main>
  )
}