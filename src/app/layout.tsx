import '../styles/globals.css'
import { ReactNode } from 'react'
import { Poppins } from '@next/font/google'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

type Props = {
  children: ReactNode
}

const poppins = Poppins({ weight: ['400', '500', '600', '700'] })

export default function RootLayout({ children }: Props) {
  return (
    <html className={poppins.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Seja bem vindo ao meu site pessoal. Aqui você pode conferir um pouco sobre minhas experiências como desenvolvedor e navegar sobre os projetos que desenvolvo"
        />

        {/* Facebook Meta Tags */}
        <meta
          property="og:url"
          content="https://profile-website-9hrnnnzv4-nitoba.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bruno Alves - Full Stack Dev" />
        <meta
          property="og:description"
          content="Seja bem vindo ao meu site pessoal. Aqui você pode conferir um pouco sobre minhas experiências como desenvolvedor e navegar sobre os projetos que desenvolvo"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/m8Bfyq1/profile-2.jpg"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="profile-website-9hrnnnzv4-nitoba.vercel.app"
        />
        <meta
          property="twitter:url"
          content="https://profile-website-9hrnnnzv4-nitoba.vercel.app/"
        />
        <meta name="twitter:title" content="Bruno Alves - Full Stack Dev" />
        <meta
          name="twitter:description"
          content="Seja bem vindo ao meu site pessoal. Aqui você pode conferir um pouco sobre minhas experiências como desenvolvedor e navegar sobre os projetos que desenvolvo "
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/m8Bfyq1/profile-2.jpg"
        />
        <title>Bruno Alves - Full Stack Dev</title>
      </head>
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
