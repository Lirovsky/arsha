import ButtonTop from "./components/ButttonTop";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Brands from "./sections/Brands";
import CallToAction from "./sections/CallToAction";
import Contact from "./sections/Contact";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import JoinOurNewsletter from "./sections/JoinOurNewsletter";
import Portfolio from "./sections/Portfolio";
import Priecing from "./sections/Priecing";
import Progress from "./sections/Progress";
import Questions from "./sections/Questions";
import Services from "./sections/Services";
import Team from "./sections/Team";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Brands />
      <About />
      <Questions />
      <Progress />
      <Services />
      <CallToAction />
      <Portfolio />
      <Team />
      <Priecing />
      <FAQ />
      <Contact />
      <JoinOurNewsletter />
      <Footer />
      <ButtonTop />
    </>
  );
}

export default App;
