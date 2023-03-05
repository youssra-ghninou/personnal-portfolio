        import {
            Menu,
            MenuItem,
            MenuButton
        } from '@szhsin/react-menu';
        import '@szhsin/react-menu/dist/index.css';
        import '@szhsin/react-menu/dist/transitions/slide.css';
import DarkModeToggle from './DarkModeToggle';
import { HashLink } from 'react-router-hash-link';
       
        export default function Example() {
            return (
                <div className="nav fixed right-0 z-50">
                    <div className="mobile  flex lg:hidden w-screen p-2  bg-[#fff] dark:bg-darkblack justify-end">
                        <Menu menuButton={<MenuButton><i class="fa-solid fa-bars text-violet text-[40px]  "></i></MenuButton>} transition>
                        <HashLink smooth to="/#Header">
                            <MenuItem >
                            <div className="home text-[16px] text-abel text-dviolet   font-light hover:underline decoration-violet decoration-4 ">Home</div>
                            </MenuItem>
                        </HashLink>
                        <HashLink smooth to="/#Project">     
                            <MenuItem>
                               <div className="home text-[16px] text-abel text-dviolet  font-light hover:underline decoration-violet decoration-4 ">Projects</div>
                            </MenuItem>
                        </HashLink>    
                        <HashLink smooth to="/#Contact"> 
                            <MenuItem>
                                <div className="home text-[16px] text-abel text-dviolet font-light hover:underline decoration-violet decoration-4 ">Contact</div>
                            </MenuItem>
                         </HashLink>
                            <DarkModeToggle />
                        </Menu>
                    </div>
                    <div className="hidden w-screen p-3 bg-[#fff] dark:bg-darkblack justify-end lg:flex lg:gap-11 lg:text-abel lg:text-dviolet dark:text-grey lg:text-[16px]">
                    <HashLink smooth to="/#Header"> <a href="" className="lg:hover:underline hover:decoration-violet decoration-4">Home</a></HashLink>
                    <HashLink smooth to="/#Project"> <a href="" className="lg:hover:underline hover:decoration-violet decoration-4">Projects</a></HashLink>
                    <HashLink smooth to="/#Contact">  <a href="" className="lg:hover:underline hover:decoration-violet decoration-4">Contact</a></HashLink>
                          <div className="text-xl">
                            <DarkModeToggle />
                        </div>
                    </div>

                </div>
            );
        }     
     