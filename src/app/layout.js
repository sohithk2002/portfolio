import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'View my portfolio',
  description:
    'Explore Sohith’s AI-powered full-stack portfolio. Built with Next.js, Prisma, Clerk, OpenAI, AWS, and GCP for scalable cloud-native applications.',
  openGraph: {
    title: 'View my portfolio',
    description:
      'Explore Sohith’s AI-powered full-stack portfolio. Built with Next.js, Prisma, Clerk, OpenAI, AWS, and GCP for scalable cloud-native applications.',
    url: 'https://portfolio-dejq.onrender.com', // replace with your domain
    siteName: 'Sohith Kampalli Portfolio',
    images: [
      {
        url: 'https://portfolio-dejq.onrender.com/og-banner.png', // make sure this exists in /public
        width: 1200,
        height: 630,
        alt: 'Sohith Kampalli Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sohith Kampalli | Full-Stack & Cloud Engineer',
    description:
      'Explore Sohith’s AI-powered full-stack portfolio. Built with Next.js, Prisma, Clerk, OpenAI, AWS, and GCP for scalable cloud-native applications.',
    images: ['https://portfolio-dejq.onrender.com/og-banner.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Optional extra OG tags fallback (if you want full HTML control) */}
        <meta property="og:image" content="https://portfolio-dejq.onrender.com/og-banner.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body className={inter.className}>
        {/* ✅ Google Analytics Scripts */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FRQZPK6JEJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FRQZPK6JEJ');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
