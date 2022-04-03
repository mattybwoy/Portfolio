import './App.css';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Intro/>
      <About/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
