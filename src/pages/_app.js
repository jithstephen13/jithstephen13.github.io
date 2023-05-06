import '@/styles/globals.css'
import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import { Navbar } from '../../components/NavBar';
import { useEffect } from 'react';




const montserrat = Montserrat({
  subsets:["latin"],
  variable: "--font-mont"
});



export default function App({ Component, pageProps }) {

  useEffect(() => {
    const threeScript = document.createElement("script");
    threeScript.setAttribute("class", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.clouds.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);
  return(
    <>
    <Head>
       <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
  <main  className={`${montserrat.variable}  font-mont bg-light w-full min-h-screen `}>
      <Navbar/>
    <Component {...pageProps} />
  </main></>) 
}
