import './index.css'
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Overview from './components/Overview';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() { 
  return (
    <><div className="flex flex-col  gap-10 dark:bg-darkblack px-3 items-center">
      <div className="">
        <Navbar />
      </div>
      <div className="hash " id='Header'>
        <Header />
      </div>
      <Overview />
      <div className=" underline decoration-violet decoration-4 text-center dark:text-grey text-abel text-[24px] lg:text-[35px] font-bold" id='Project'>Work</div>
      <div className="projects-section" >
        <Project />
      </div>
      <div className=" underline decoration-violet decoration-4 dark:text-grey text-center mt-5 text-abel text-[24px] lg:text-[35px] font-bold " id='Contact'>Contact</div>
      <Contact />
    </div><Footer /></>
  );
}

export default App
