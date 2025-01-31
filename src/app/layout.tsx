import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Venda de produtos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <meta name="description" content="DBSD é a empresa que oferece para você as melhores soluções em termos de produtos de limpeza e entre outros materiais diversos, aproveite já e acesse o nosso site." />
        <link rel="icon" type="image/svg+xml" href="./logo.svg" />
        <title>DBSD</title>
        <link rel="icon" type="image/svg+xml" href="/icon.jpg" />
        <meta name="rating" content="general" />
        <meta name="copyright" content="Copyright ©" />
        <meta name="distribution" content="global" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="DBSD Vendas" />
        <meta name="author" content="Pedro Osório" />
        <meta name="keywords" content="DBSD, compras, produtoas, vendas, materiais, limpeza, cozinha, ecommerce" />
        <meta property="og:title" content="Baxtter Corporation" />
        <meta property="og:description" content="DBSD é a empresa que oferece para você as melhores soluções em termos de produtos de limpeza e entre outros materiais diversos, aproveite já e acesse o nosso site." />
        <meta property="og:url" content="https://ecommerce-neon-theta.vercel.app/" />
        <meta property="og:type" content="website" />
      </head>
      <body className={`antialiased`}  >
        {children}
      </body>
    </html>
  );
}
