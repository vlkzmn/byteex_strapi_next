import getData from '@/utils/fetchData';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import About from '@/components/About';
import HowToOrder from '@/components/HowToOrder';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import InfoBanner from '@/components/InfoBanner';
import FinalCTA from '@/components/FinalCTA';

export default async function Home() {
  const { hero, benefits, about, order, reviews, faq, info, final } =
    await getData();

  return (
    <div>
      <Hero data={hero} />

      <main>
        <Benefits data={benefits} />
        <About data={about} />
        <HowToOrder data={order} />
        <Reviews data={reviews} />
        <FAQ data={faq} />
        <InfoBanner data={info} />
      </main>

      <FinalCTA data={final} />
    </div>
  );
}
