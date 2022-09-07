import './index.css'
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Overview from './components/Overview';
import Project from './components/Project';





function App() { 
  return (

    <div className=" flex flex-col gap-10 px-3 items-center"> 
      <div className="div  sticky">
        <Navbar />
      </div>
      <div className="hash" id='Header'>
        <Header />
      </div>
      <Overview />
      <div className="work underline decoration-violet decoration-4 text-center  text-abel text-[16px]">Work</div>
      <div className="projects-section">
        <Project  />
      </div>
      <div className="contact underline decoration-violet decoration-4 text-center mt-5 text-abel text-[16px] md:hidden">Contact</div>
      <div className="contact flex flex-col gap-1 md:flex-row md:gap-6 pb-5 items-center justify-center text-left" id='Contact'>
        <a href="mailto:ghninou177@gmail.com" className='email text-[14px] md:text-[20px]  font-light text-abel '>ghninou177@gmail.com </a>
        <a href="https://www.linkedin.com/in/youssra-ghninou/" className='email text-[14px] md:text-[20px]  font-light text-abel '>LinkedIn</a>
        <a href="https://github.com/youssra-ghninou" className='email text-[14px] md:text-[20px]  font-light text-abel text-black'>github</a>
      </div>
    </div>
  );
}

export default App
