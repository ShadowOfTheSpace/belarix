import {
  AboutUs,
  Footer,
  Header,
  Hero,
  Portfolio,
  Services,
  Steps,
  Team,
} from "@libs/components/components";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col grow">
        <Hero />
        <AboutUs />
        <Services />
        <Portfolio />
        <Team />
        <Steps />
      </main>
      <Footer />
    </>
  );
};

export { App };
