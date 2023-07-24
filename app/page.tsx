import DataAnalaytics from "./compnents/DataAnalaytics";
import Footer from "./compnents/Footer";
import Hero from "./compnents/Hero";
import Navbar from "./compnents/Navbar";
import NewsLetter from "./compnents/NewsLetter";
import Plans from "./compnents/Plans";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <DataAnalaytics />
        <NewsLetter />
        <Plans />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
