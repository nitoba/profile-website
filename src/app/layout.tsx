import { ReactNode } from 'react'
import { Metadata } from 'next/types'
import { Poppins } from 'next/font/google'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

import '../styles/globals.css'

type Props = {
  children: ReactNode
}

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Bruno Alves - Full Stack Dev',
  description:
    'Seja bem vindo ao meu site pessoal. Aqui você pode conferir um pouco sobre minhas experiências como desenvolvedor e navegar sobre os projetos que desenvolvo',
  openGraph: {
    title: 'Bruno Alves - Full Stack Dev',
    description:
      'Seja bem vindo ao meu site pessoal. Aqui você pode conferir um pouco sobre minhas experiências como desenvolvedor e navegar sobre os projetos que desenvolvo',
    url: 'https://nitodev.vercel.app',
    siteName: 'Bruno Alves - Full Stack Dev',
    images: [
      {
        url: 'https://i.ibb.co/m8Bfyq1/profile-2.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'pt-BR',
    type: 'website',
  },
  twitter: {
    title: 'Bruno Alves - Full Stack Dev',
    site: 'https://nitodev.vercel.app',
    card: 'summary_large_image',
    description:
      'Seja bem vindo ao meu site pessoal. Aqui você pode conferir um pouco sobre minhas experiências como desenvolvedor e navegar sobre os projetos que desenvolvo',
    images: [
      {
        url: 'https://i.ibb.co/m8Bfyq1/profile-2.jpg',
        width: 800,
        height: 600,
      },
    ],
  },
}

export default function RootLayout({ children }: Props) {
  return (
    <html className={poppins.className}>
      <body>
        <div className="w-full max-w-[1220px] mx-auto px-[1.5rem]">
          <Header />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  )
}
