import { MdDarkMode } from 'react-icons/md';
import { BsSun } from 'react-icons/bs';
import { IconContext } from "react-icons";
import useDarkMode from '../hook/useDarkMode';


const DarkModeToggle = () => {
    const [colorTheme, setTheme] = useDarkMode();
    return (
        <button onClick={() => setTheme(colorTheme)} className="transition duration-500 pl-6">
            {colorTheme === "light" ? (
                <IconContext.Provider value={{ className: "text-xl" }}>
                    <div className="flex flex-col gap-1 justify-center items-center w-full">
                        <BsSun />
                        <span className="text-xs hidden">Light Mode</span>
                    </div>
                </IconContext.Provider>) :
                (<IconContext.Provider value={{ className: "text-xl" }}>
                    <div className="flex flex-col gap-1 justify-center items-center w-full">
                        <MdDarkMode />
                        <span className="text-xs hidden">Dark Mode</span>
                    </div>
                </IconContext.Provider>)
            }

        </button>
    );
}

export default DarkModeToggle;