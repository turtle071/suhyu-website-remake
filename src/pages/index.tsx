import Head from 'next/head';
import Main from '../components/home/Main';
import Header from '../components/home/Header';

export default function Home() {
  return (
    <main>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="canonical" href="https://turtlee.tech/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="" />
        <meta property="og:image" content="" />
        <meta name="description" content="Suhyu is a Discord bot" />
        <title>Suhyu | A Discord bot.</title>
      </Head>
      <Header />
      <Main />
    </main>
  );
}
