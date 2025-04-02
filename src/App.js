// import logo from './assets/hexnode-vector-logo.svg';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Scope from './components/scope';
import About from './components/Tabs'
import Testimonials from './components/Testimonials'
import Demo from './components/Demo'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <Scope />
      <About />
      {/* <Testimonials /> */}
      {/* <Demo /> */}
      <Footer />
    </div>
  );
}

export default App;
