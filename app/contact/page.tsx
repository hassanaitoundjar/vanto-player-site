import { buildMetadata } from '@/lib/siteConfig';
import ContactClient from './ContactClient';

export const metadata = buildMetadata({
  title: 'Contact Us | Vanto Player',
  description: 'Have a question about Vanto Player, need technical support, or want to report an issue? Our team is here to help you.',
  path: '/contact',
});

export default function ContactPage() {
  return <ContactClient />;
}
