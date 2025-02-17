import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { ThemeProvider } from '~/components/Theme/ThemeProvider'
import { DialogProvider } from '~/components/Dialog'
import { Toaster } from 'sonner'

const cascadiaMono = localFont({
  src: '../../public/font/CascadiaMono.woff2',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Rice and Beans',
  description:
    'Rice and Beans is a project that aims to help developers to create applications with a better developer experience.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cascadiaMono.className}>
        <Toaster />
        <DialogProvider>
          <ThemeProvider
            attribute="class"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </DialogProvider>
      </body>
    </html>
  )
}
