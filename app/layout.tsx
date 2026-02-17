import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Donorte Studios | Agencia de Contenido Orgánico',
  description:
    'No hacemos contenido para coleccionar likes. Creamos máquinas de ventas que funcionan. +10M€ en ventas directas generadas.',
  keywords: [
    'agencia contenido',
    'marketing orgánico',
    'redes sociales',
    'contenido viral',
    'Donorte',
    'crecimiento orgánico',
  ],
  authors: [{ name: 'Donorte Studios' }],
  openGraph: {
    title: 'Donorte Studios | Agencia de Contenido Orgánico',
    description:
      'No hacemos contenido para coleccionar likes. Creamos máquinas de ventas que funcionan.',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Donorte Studios',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Donorte Studios | Agencia de Contenido Orgánico',
    description:
      'No hacemos contenido para coleccionar likes. Creamos máquinas de ventas que funcionan.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${poppins.variable} ${inter.variable} font-poppins antialiased`}>
        {children}
      </body>
    </html>
  );
}
