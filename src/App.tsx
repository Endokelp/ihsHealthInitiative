import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Programs from './sections/Programs';
import Contact from './sections/Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
