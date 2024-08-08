import {
  Tailwind,
  Section,
  Heading,
  Img,
  Text,
  Hr,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmail: React.FC<Readonly<ContactEmailProps>> = ({
  name,
  email,
  message,
}) => {
  return (
    <Tailwind>
      <Section className="flex items-center justify-evenly gap-4 py-4">
        <Img
          alt="Buildbot Logo"
          src="https://res.cloudinary.com/dtzis7901/image/upload/v1722746994/Logos/lsgf9lciieblf3jemxy5.png"
        />
        <Text className="text-xl font-bold text-slate-900 dark:text-slate-200">
          BUILDBOT
        </Text>
      </Section>
      <Section>
        <Heading as="h1" className="text-5xl text-center font-semibold capitalize mb-6">
          { name } ({ email }) Message You 
        </Heading>
        <Text>
          { message }
        </Text>
      </Section>
    </Tailwind>
  );
};
