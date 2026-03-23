import './global.css';
import Script from "next/script";
import ClientProviders from '../components/ClientProviders';

// ✅ Global metadata (fallback for homepage + SEO)
export const metadata = {
  title: 'CampusMart',
  description: 'Your campus marketplace',
  openGraph: {
    title: 'CampusMart',
    description: 'Your campus marketplace',
    url: 'https://yourdomain.com',
    siteName: 'CampusMart',
    images: [
      {
        url: 'https://yourdomain.com/fav.jpg', // MUST be absolute
        width: 800,
        height: 600,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CampusMart',
    description: 'Your campus marketplace',
    images: ['https://yourdomain.com/fav.jpg'],
  },
  icons: {
    icon: '/fav.jpg',
    shortcut: '/fav.jpg',
    apple: '/fav.jpg',
  },
};

// ✅ Fix hydration bug properly
function HiddenTimestamp() {
  return null; // simplest safe fix (no mismatch at all)
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-8234149876760532" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8234149876760532"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <ClientProviders>
          {children}
        </ClientProviders>

        {/* ✅ No hydration mismatch anymore */}
        <HiddenTimestamp />
      </body>
    </html>
  );
}
