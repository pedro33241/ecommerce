import type { Metadata } from "next";
import { BackToTop } from "@/components/BackToTop";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next';
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Public+Sans:ital,wght@0,100..900;1,100..900&family=Antiloase:wght@400;700&display=swap" rel="stylesheet" />
        <meta name="description" content="DBSD é a empresa que oferece para você as melhores soluções em termos de produtos de limpeza e entre outros materiais diversos, aproveite já e acesse o nosso site." />
        <link rel="icon" type="image/svg+xml" href="./logo.svg" />
        <title>DBSD</title>
        <meta name="rating" content="general" />
        <meta name="copyright" content="Copyright ©" />
        <meta name="distribution" content="global" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="DBSD Vendas" />
        <meta name="author" content="wendysoft" />
        <meta name="keywords" content="DBSD, compras, produtoas, vendas, materiais, limpeza, cozinha, ecommerce" />
        <meta property="og:title" content="DBSD" />
        <meta property="og:description" content="DBSD é a empresa que oferece para você as melhores soluções em termos de produtos de limpeza e entre outros materiais diversos, aproveite já e acesse o nosso site." />
        <meta property="og:url" content="https://www.dbsd.ao/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DBSD - Produtos de Limpeza e Materiais Diversos" />
<meta property="og:description" content="Encontre na DBSD os melhores produtos de limpeza, cozinha e materiais diversos com qualidade e preço acessível em Angola." />
<meta property="og:image" content="https://www.dbsd.ao/og-image.jpg" />
<meta property="og:locale" content="pt_AO" />
<meta property="og:site_name" content="DBSD" />
<meta name="theme-color" content="#0f172a" />

      </head>
      <body className={`antialiased`}  >
        {children}
        <BackToTop />
        <SpeedInsights />
       <Analytics />
      </body>
      
    </html>
  );
}
