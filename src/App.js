import { About } from './components/About';
import { Experience } from './components/Experience';
import { Header } from './components/Header';
import { SkillsContainer } from './components/SkillsContainer';
import './global.css';


function App() {
  return (
    <>
      <Header />
      <About />
      <SkillsContainer />
      <Experience />
    </>
  );
}

export default App;
