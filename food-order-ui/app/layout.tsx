import './globals.css'
import { Prompt } from 'next/font/google'

const inter = Prompt({ 
  weight: '400',
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Food ORDER UI',
  description: 'Food Order System UI component',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
