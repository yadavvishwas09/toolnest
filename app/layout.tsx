
import type { Metadata } from 'next';
import Link from 'next/link';
import { FileStack } from 'lucide-react';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'ToolNest — Free Online PDF & Image Tools',
    template: '%s | ToolNest'
  },
  description:
    'Free online PDF and image tools. Merge, split, convert, rotate, resize and compress files securely in your browser.',
  metadataBase: new URL('https://toolnest.yadavvishwas09.workers.dev'),
  alternates: { canonical: '/' },
  verification: {
    google: 'urqqKKdD4-TzBrAn2gYcy1Cx0LrRcbWFD4I_CtjuXV0'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container header-row">
            <Link href="/" className="brand">
              <span className="brand-mark">
                <FileStack size={21} />
              </span>
              ToolNest
            </Link>
            <nav className="nav">
              <Link href="/#pdf-tools">PDF Tools</Link>
              <Link href="/#image-tools">Image Tools</Link>
              <Link href="/about">About</Link>
            </nav>
            <Link className="mobile-menu" href="/#all-tools">
              Explore tools
            </Link>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="container footer-row">
            <div>
              © {new Date().getFullYear()} ToolNest. Simple tools, right in your browser.
            </div>
            <div className="footer-links">
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
