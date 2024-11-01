import type { Metadata } from "next";
 
import "./globals.css";

 
export const metadata: Metadata = {
  title: "Ecommerce",
  description: "",
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
<link rel="preconnect" href="https://fonts.gstatic.com"  /> 
 
<meta
          name="description"
          content=""
        />
        <link rel="icon" type="image/svg+xml" href="" />
        <meta name="rating" content="general" />
        <meta name="copyright" content="Copyright ©" />
        <meta name="distribution" content="global" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Pedro Osório" />
        <meta
          name="keywords"
          content="vendas, loja online, produtos"
        />
        <meta property="og:title" content="D2 Dinâmico" />
        <meta
          property="og:description"
          content=""
        />
      </head>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
