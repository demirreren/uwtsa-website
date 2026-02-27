import {
  AnnouncementBar,
  Navigation,
  Hero,
  UpcomingEvents,
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
      <AnnouncementBar />
      <Navigation />
      <main>
        <Hero />
        <UpcomingEvents />
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
