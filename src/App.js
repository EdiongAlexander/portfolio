import './App.scss';
import Header from './components/header'
import About from './components/about'
import Experience from './components/experience'
import Projects from './components/projects'
import Skills from './components/skills'
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
