import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <Hero />
      <Features />
      <ContactForm />
    </div>
  );
}
