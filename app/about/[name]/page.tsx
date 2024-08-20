import Link from "next/link";
import { CldImage } from "@/components/cldimage";
import { bitter, timmana } from "@/utils/font";

const Services = [
  {
    id: 1,
    title: "Financial Planning",
    name: "financial-planning",
    image: "",
    paragraph1:
      "Financial planning is the cornerstone of achieving long-term financial success. By creating a comprehensive financial plan, you can set clear and achievable goals tailored to your unique circumstances. Whether you're looking to save for a major purchase, plan for retirement, or ensure your family's financial security, a well-thought-out financial plan provides a roadmap for achieving your objectives. This involves analyzing your current financial situation, identifying your short-term and long-term goals, and creating a personalized strategy that aligns with your values and aspirations.",
    paragraph2:
      "Our approach to financial planning is holistic, considering all aspects of your financial life, including income, expenses, assets, liabilities, and future needs. We work closely with you to understand your financial habits, risk tolerance, and aspirations, allowing us to develop a plan that not only meets your current needs but also adapts to changes in your life. Regular reviews and adjustments are part of the process, ensuring that your financial plan remains relevant and effective in the face of life's uncertainties.",
    paragraph3:
      "By tailoring your financial plan to your specific goals, we empower you to take control of your financial future with confidence. Whether you're focused on wealth accumulation, retirement readiness, or protecting your family, our personalized approach ensures that your financial plan is as unique as you are. With expert guidance and ongoing support, you'll have the peace of mind knowing that you're on the right path to achieving your financial dreams.",
  },
  {
    id: 2,
    title: "Investment Management",
    name: "investment-management",
    image: "",
    paragraph1:
      "Investment management is all about making your money work for you, and our strategic approach is designed to maximize your wealth over time. We understand that every investor has different goals, risk tolerances, and time horizons, which is why we offer customized investment strategies tailored to your specific needs. Whether you're seeking growth, income, or a balanced approach, our investment management services provide the expertise and guidance you need to navigate the complex world of investing.",
    paragraph2:
      "Our investment philosophy is based on a deep understanding of market dynamics and a commitment to disciplined, long-term investing. We begin by assessing your financial goals, risk tolerance, and investment preferences, allowing us to build a diversified portfolio that aligns with your objectives. By focusing on asset allocation, risk management, and ongoing portfolio monitoring, we help you achieve consistent returns while minimizing unnecessary risks. Our investment strategies are designed to be flexible, adapting to changing market conditions and your evolving needs.",
    paragraph3:
      "With our strategic investment management services, you can have confidence that your wealth is being managed with care and precision. Whether you're investing for retirement, education, or other financial goals, our team of experienced professionals is dedicated to helping you achieve your financial objectives. Through regular communication, transparent reporting, and proactive adjustments, we ensure that your investment portfolio remains aligned with your goals, providing you with the financial security and peace of mind you deserve.",
  },
  {
    id: 3,
    title: "Retirement Planning",
    name: "retirement-planning",
    image: "",
    paragraph1:
      "Retirement planning is a critical component of your overall financial strategy, ensuring that you can enjoy your golden years without financial stress. Our retirement planning services are designed to help you build a secure and sustainable income stream that will support your lifestyle long after you stop working. By starting early and planning carefully, you can take control of your retirement and make informed decisions that will benefit you in the long run.",
    paragraph2:
      "We begin the retirement planning process by assessing your current financial situation, understanding your retirement goals, and estimating the income you'll need to maintain your desired lifestyle. This involves evaluating your current savings, expected Social Security benefits, pension plans, and other sources of retirement income. We then develop a personalized retirement plan that includes strategies for saving, investing, and withdrawing funds in a tax-efficient manner, ensuring that your money lasts as long as you need it.",
    paragraph3:
      "Our retirement planning services also include regular reviews and adjustments, helping you stay on track as your circumstances change. Whether you're still in the early stages of saving or nearing retirement age, we provide the guidance and support you need to navigate the complexities of retirement planning. With our help, you can retire with confidence, knowing that your financial future is secure and that you're prepared for whatever challenges may arise.",
  },
  {
    id: 4,
    title: "Estate Planning",
    name: "estate-planning",
    image: "",
    paragraph1:
      "Estate planning is about more than just distributing your assets; it's about protecting your legacy and ensuring that your loved ones are cared for after you're gone. Our estate planning services are designed to help you navigate the complexities of wills, trusts, and other legal instruments that are essential for preserving your wealth and passing it on to future generations. By working with us, you can create a comprehensive estate plan that reflects your wishes and provides for your family's needs.",
    paragraph2:
      "The first step in estate planning is understanding your goals and objectives, whether that means providing for your spouse and children, supporting a favorite charity, or minimizing taxes and legal fees. We work with you to create a tailored estate plan that includes all necessary documents, such as wills, trusts, powers of attorney, and healthcare directives. Our goal is to ensure that your assets are distributed according to your wishes, and that your loved ones are protected from unnecessary financial and legal burdens.",
    paragraph3:
      "Regular reviews and updates are an essential part of the estate planning process, ensuring that your plan remains effective as your life circumstances change. Whether you're dealing with a significant life event, such as marriage, divorce, or the birth of a child, or simply want to ensure that your estate plan is up-to-date, we provide the expertise and support you need. With our estate planning services, you can have peace of mind knowing that your legacy is secure and that your loved ones will be taken care of.",
  },
  {
    id: 5,
    title: "Insurance Solutions",
    name: "insurance-solutions",
    image: "",
    paragraph1:
      "We begin by conducting a thorough assessment of your current insurance coverage and identifying any gaps that could leave you vulnerable. From life and health insurance to property and casualty coverage, we help you select the right policies to protect yourself and your family. Our insurance solutions are designed to be flexible, allowing you to adjust your coverage as your needs change over time. By working with us, you can ensure that you have the right protection in place to safeguard your financial future.",
    paragraph2:
      "We begin by conducting a thorough assessment of your current insurance coverage and identifying any gaps that could leave you vulnerable. From life and health insurance to property and casualty coverage, we help you select the right policies to protect yourself and your family. Our insurance solutions are designed to be flexible, allowing you to adjust your coverage as your needs change over time. By working with us, you can ensure that you have the right protection in place to safeguard your financial future.",
    paragraph3:
      "In addition to helping you select the right insurance products, we also provide ongoing support and advice to ensure that your coverage remains adequate and cost-effective. Whether you're dealing with a claim, renewing a policy, or considering new coverage options, our team is here to help you every step of the way. With our insurance solutions, you can have confidence that you're protected against life's uncertainties and that your financial well-being is secure.",
  },
  {
    id: 6,
    title: "Debt Management",
    name: "debt-management",
    image: "",
    paragraph1:
      "Managing debt can be one of the most challenging aspects of personal finance, but our debt management services are designed to help you regain control of your financial situation. Whether you're dealing with credit card debt, student loans, or other forms of debt, we offer personalized solutions to help you pay down your balances, reduce interest costs, and improve your financial health. Our goal is to help you get back on track and achieve financial freedom.",
    paragraph2:
      "The first step in debt management is understanding your current financial situation and the factors contributing to your debt. We work with you to develop a personalized debt repayment plan that fits your budget and financial goals. This may include debt consolidation, where we combine multiple debts into a single payment with a lower interest rate, or other strategies designed to reduce your overall debt burden. Our debt management services also include education and support, helping you develop healthy financial habits and avoid future debt problems.",
    paragraph3:
      "With our debt management services, you can take control of your finances and work towards a debt-free future. We provide ongoing support and monitoring, helping you stay on track and adjust your plan as needed. Whether you're dealing with a temporary setback or a long-term financial challenge, our team is here to help you overcome your debt and achieve your financial goals.",
  },
  {
    id: 7,
    title: "Education Planning",
    name: "education-planning",
    image: "",
    paragraph1:
      "Education planning is a vital part of securing your children's financial future, ensuring that they have the resources they need to pursue their dreams. Whether you're saving for college or planning for private school, our education planning services are designed to help you build a financial foundation that supports your children's educational goals. By starting early and planning carefully, you can provide your children with the opportunities they need to succeed.",
    paragraph2:
      "We begin the education planning process by understanding your family's financial situation, your educational goals, and the time frame for achieving those goals. We then develop a personalized savings plan that includes strategies for maximizing your contributions, taking advantage of tax-advantaged accounts, and investing in a way that balances growth and risk. Our education planning services also include guidance on financial aid, scholarships, and other resources that can help reduce the cost of education.",
    paragraph3:
      "By working with us on your education planning, you can ensure that your children have the financial support they need to achieve their academic goals. Whether you're just starting to save or looking for ways to maximize your existing savings, our team is here to help you navigate the complexities of education planning. With our expert guidance, you can provide your children with a brighter future and the financial resources they need to succeed.",
  },
];

interface ServiceProps {
  params: {
    name: string;
  };
}

export default function Page({ params }: ServiceProps) {
  const service = Services.find((b) => b.name === params.name);

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

  return (
    <section className="px-6 py-4 md:px-12 md:py-14 space-y-4 md:space-y-8">
      <h1 className="font-bold text-4xl md:text-6xl text-center">
        {service.title}
      </h1>
      <p className="text-md text-slate-500 text-justify">
        {service.paragraph1}
      </p>
      <p className="text-md text-slate-500 text-justify">
        {service.paragraph2}
      </p>
      <p className="text-md text-slate-500 text-justify">
        {service.paragraph3}
      </p>
    </section>
  );
}
