
import BeforeFooter from './components/BeforeFooter';
import CardSection from './components/CardSection';
import FilterButton from './components/FilterButton';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <FilterButton />
      <CardSection />
      <BeforeFooter />
      <Footer />
    </div>
  );
}

export default App;
