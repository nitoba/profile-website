import { ReactNode } from 'react'
import Footer from '../src/components/footer'
import Header from '../src/components/header'
import '../src/styles/globals.css'

type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html>
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
        <div className="max-w-[1220px] my-0 mx-auto px-[1.5rem]">
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
