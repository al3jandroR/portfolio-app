import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "Website Portfolio",
  description: "Portfolio website for my projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap" rel="stylesheet"/>
      <link rel="icon" type="image/jpg" href="./imgs/css.png"></link>
      </Head>
      <body>{children}</body>
    </html>
  );
}
