import {
  Navigation,
  Hero,
  FeaturedEvent,
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
        <FeaturedEvent />
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
