import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />

          {/* HTML Meta Tags */}
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
