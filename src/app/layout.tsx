"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { RecoilRoot } from 'recoil'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MQ Thesis Portal',
  description: 'Portal for MQ students for thesis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RecoilRoot>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </RecoilRoot>
  )
}
