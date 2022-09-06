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
                <div className="nav right-0 mr-4 fixed ">
                    <div className="mobile lg:hidden">
                        <Menu menuButton={<MenuButton><i class="fa-solid fa-bars text-violet "></i></MenuButton>} transition>
                            <MenuItem >
                            <div className="home text-[16px] text-abel text-black hover:decoration-4 hover:decoration-violet">Home</div>
                            </MenuItem>
                            <MenuItem>
                               <div className="home text-[16px] text-abel text-black hover:decoration-4 hover:decoration-violet">Projects</div>
                            </MenuItem>
                            <MenuItem>
                                <div className="home text-[16px] text-abel text-black hover:decoration-4 hover:decoration-violet">Contact</div>
                            </MenuItem>
                            <DarkModeToggle />
                        </Menu>
                    </div>
                    <div className="desktop hidden lg:flex lg:gap-11 lg:mt-3 lg:mr-3 lg:text-abel lg:text-[16px]">
                    <HashLink smooth to="/#Header"> <a href="" className="home lg:hover:underline hover:decoration-violet decoration-4">Home</a></HashLink>
                    <HashLink smooth to="/#Project"> <a href="" className="projects">Projects</a></HashLink>
                          <a href="" className="contact">Contact</a>
                          <div className="text-xl">
                            <DarkModeToggle />
                        </div>
                    </div>

                </div>
            );
        }     
     