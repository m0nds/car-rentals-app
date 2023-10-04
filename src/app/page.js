//components
import {
  Header,
  Hero,
  Cars,
  About,
  Why,
  Testimonial,
  Footer,
  Cta,
  BackToTopBtn,
} from "./components";

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
      <Header />
      <Hero />
      <Cars />
      <About />
      <Why />
      <Testimonial />
      <Cta />
      <Footer />
      <BackToTopBtn />
      <div className="h-[4000px]"></div>
    </main>
  );
}
