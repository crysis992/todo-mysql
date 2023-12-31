import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Mali as GF } from 'next/font/google'
import Link from 'next/link'
import { Toaster } from '@/components/ui/Toaster'
import { Provider } from '@radix-ui/react-toast'
import Providers from '@/components/Providers'

const globalFont = GF({ subsets: ['latin'], weight: ['400'], display: "swap", adjustFontFallback: false })

export const metadata: Metadata = {
  title: 'Simple Todo',
  description: 'Simple todo app with nextjs and mysql',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(globalFont.className, "min-h-screen flex flex-col")}>
        <Providers session={null}>
          <nav className='w-full bg-amber-500'>
            <Link className='text-2xl font-bold leading-loose ml-2 hover:text-white transition-colors duration-75 ease-in' href={'/'} >Simple Todo</Link>
          </nav>

          <div className='grow flex flex-col'>
            {children}
          </div>
          <footer>
            <div className='flex justify-center'>
              <a href="https://github.com/crysis992/todo-mysql" className='font-bold' target='_blank'>Sourcecode</a>
            </div>
          </footer>
          <Toaster />
        </Providers>
      </body>
    </html >
  )
}
