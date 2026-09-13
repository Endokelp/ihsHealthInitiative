import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Impact from './sections/Impact';
import Programs from './sections/Programs';
import Contact from './sections/Contact';
import Partners from './pages/Partners';
import './App.css';

const Home = () => (
  <>
    <Hero />
    <Impact />
    <Programs />
    <Contact />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/partners" element={<Partners />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
