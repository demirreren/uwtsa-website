import {
  Navigation,
  Hero,
  About,
  Highlights,
  CTABand,
  Collabs,
  Sponsors,
  FAQ,
  Contact,
  Footer,
} from '@/components';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Highlights />
        <CTABand />
        <Collabs />
        <Sponsors />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
