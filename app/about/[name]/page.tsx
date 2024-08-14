import Link from "next/link";
import { CldImage } from "@/components/cldimage";
import { bitter, timmana } from "@/utils/font";

const Services = [
  {
    id: 1,
    titlle: "Financial Planning",
    name: "financial-planning",
    image: "",
    paragraph1:
      "Financial planning is the cornerstone of achieving long-term financial success. By creating a comprehensive financial plan, you can set clear and achievable goals tailored to your unique circumstances. Whether you're looking to save for a major purchase, plan for retirement, or ensure your family's financial security, a well-thought-out financial plan provides a roadmap for achieving your objectives. This involves analyzing your current financial situation, identifying your short-term and long-term goals, and creating a personalized strategy that aligns with your values and aspirations.",
    paragraph2:
      "Our approach to financial planning is holistic, considering all aspects of your financial life, including income, expenses, assets, liabilities, and future needs. We work closely with you to understand your financial habits, risk tolerance, and aspirations, allowing us to develop a plan that not only meets your current needs but also adapts to changes in your life. Regular reviews and adjustments are part of the process, ensuring that your financial plan remains relevant and effective in the face of life's uncertainties.",
    paragraph3:
      "By tailoring your financial plan to your specific goals, we empower you to take control of your financial future with confidence. Whether you're focused on wealth accumulation, retirement readiness, or protecting your family, our personalized approach ensures that your financial plan is as unique as you are. With expert guidance and ongoing support, you'll have the peace of mind knowing that you're on the right path to achieving your financial dreams.",
  },
];

interface ServiceProps {
  params: {
    name: string;
  };
}

export default function Page({ params }: ServiceProps) {
  const service = Services.find((service) => service.name === params.name);

  if (!service) {
    return (
      <section className="px-6 py-4 md:px-12 md:py-14">
        <h1 className="font-bold text-4xl md:text-6xl text-center">
          Service Not Found
        </h1>
        <p className="text-center text-md text-slate-500">
          We're sorry, but we couldn't find the service you're looking for.
        </p>
      </section>
    );
  }
}
