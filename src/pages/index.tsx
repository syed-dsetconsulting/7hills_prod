// pages/index.tsx
import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Seven Hills Minerals — Sustainable Mining & Logistics Solutions</title>
        <meta
          name="description"
          content="Leading minerals extraction and logistics company. Expert in iron ore, bauxite, manganese with sustainable practices and reliable delivery."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
