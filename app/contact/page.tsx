import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact ToolNest',
  description: 'Contact ToolNest for feedback, bug reports, accessibility issues, or business enquiries.'
};

export default function Contact() {
  return (
    <main className="container page-copy">
      <h1>Contact ToolNest</h1>
      <p>For feedback, bug reports, accessibility issues, or business enquiries, email the ToolNest team at <a href="mailto:yadavvishwas04@gmail.com" style={{ color: '#2563eb' }}>yadavvishwas04@gmail.com</a>.</p>
    </main>
  );
}
