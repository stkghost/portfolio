import { About } from './components/About';
import { Experience } from './components/Experience';
import { Header } from './components/Header';
import { Projects } from './components/Projects';
import { SkillsContainer } from './components/SkillsContainer';
import './global.css';



function App() {
  return (
    <>
      <Header />
      <About />
      <SkillsContainer />
      <Experience />
      <Projects />
    </>
  );
}

export default App;
