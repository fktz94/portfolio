import Section from './Section';
import ContactItem from './ContactItem';
import contactData from '../contactData';

export default function Contact() {
  const links = contactData.map(({ icon, title }) => <ContactItem key={title} icon={icon} title={title} />);

  const innerContent = <ul className="w-full max-w-[480px] my-4 flex flex-col items-center lg:py-6">{links}</ul>;

  return <Section id="contact" title="Contacto" innerContent={innerContent} />;
}
