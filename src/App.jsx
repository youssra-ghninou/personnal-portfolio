import './index.css'
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Overview from './components/Overview';




function App() {
  return (
    
    <div className="w-full flex flex-col gap-5">
      <Navbar/>,
      <Header/>,
      <Overview/>
    </div>
  );
}

export default App
