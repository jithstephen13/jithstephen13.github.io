import '@/styles/globals.css'
import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import { Navbar } from '../../components/NavBar';
import SolarSystemBg from '../../components/SolarSystemBg';

const montserrat = Montserrat({
  subsets:["latin"],
  variable: "--font-mont"
});

export default function App({ Component, pageProps }) {
  return(
    <>
      <Head>
         <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <SolarSystemBg />
      <main className={`${montserrat.variable} font-mont bg-transparent text-white w-full min-h-screen relative z-0`}>
        <Navbar/>
        <Component {...pageProps} />
      </main>
    </>
  ) 
}
