import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alawiye Thaoban Olayinka | Full Stack Developer',
  description: 'Portfolio of a passionate full stack developer with expertise in web development and cinematography',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-primary-black`}>
        <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none"></div>
        <Header />
        <main className="relative z-10">
          {children}
        </main>
        <footer className="border-t border-gray-800 py-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Alawiye Thaoban Olayinka. All rights reserved.
          </p>
          <p className="text-primary-green text-sm mt-2">
            Built with Next.js & Tailwind CSS👌
          </p>
        </footer>
      </body>
    </html>
  )
}