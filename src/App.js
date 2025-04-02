// import logo from './assets/hexnode-vector-logo.svg';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Scope from './components/scope';
import About from './components/Tabs';
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <Scope />
      <About />
      <Footer />
    </div>
  );
}

export default App;
