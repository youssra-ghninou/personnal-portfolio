import { Routes, Route, Link } from "react-router-dom";
import './index.css'
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Overview from './components/Overview';
import Project from './components/Project';





function App() {
  return (

    <div className="w-full flex flex-col gap-5">
      <Navbar />
      <Header />
      <Overview />
      <div className="work underline decoration-violet decoration-4 text-center  font-abel text-[16px]">Work</div>
      <div className="projects-section flex flex-col gap-5">
        <Project text='I2I' />
        <Project text='chat-app-css-illustration-master' />
        <Project text='clipboard-landing-page-master' />
      </div>
      <div className="contact underline decoration-violet decoration-4 text-center mt-5 font-abel text-[16px]">Contact</div>
      <div className="contact flex flex-col gap-1 items-center justify-center text-left">
        <a href="" className='email text-[14px]  font-medium font-abel text-grey'>ghninou177@gmail.com</a>
        <a href="" className='email text-[14px] font-medium font-abel text-grey'>LinkedIn</a>
        <a href="" className='email text-[14px] font-medium font-abel text-grey'>github</a>
      </div>
    </div>
  );
}

export default App
