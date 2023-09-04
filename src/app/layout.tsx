import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Mali as GF } from 'next/font/google'
import Link from 'next/link'

const globalFont = GF({ subsets: ['latin'], weight: ['400'], display: "swap", adjustFontFallback: false })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(globalFont.className, "min-h-screen flex flex-col")}>

        <nav className='w-full bg-amber-500'>
          <Link className='text-2xl font-bold leading-loose ml-2 hover:text-white transition-colors duration-75 ease-in' href={'/'} >Simple Todo</Link>
        </nav>

        <div className='grow mt-5'>
          {children}
        </div>
        <footer>Footer</footer>
      </body>
    </html >
  )
}