import Features from "./components/Features";
import Footer from "./components/Footer";
import { Hero } from "./components/Hero";
import { Highlights } from "./components/Highlights";
import HowItWork from "./components/HowItWork";
import { Model } from "./components/Model";
import { Navbar } from "./components/Navbar";

function App() {
  return <main className="bg-black">
    <Navbar />
    <Hero />
    <Highlights />
    <Model />
    <Features />
    <HowItWork />
    <Footer />
  </main>;
}

export default App;
