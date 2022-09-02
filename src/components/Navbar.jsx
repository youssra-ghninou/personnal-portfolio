import { HashLink as Link } from 'react-router-hash-link';
        import {
            Menu,
            MenuItem,
            MenuButton
        } from '@szhsin/react-menu';
        import '@szhsin/react-menu/dist/index.css';
        import '@szhsin/react-menu/dist/transitions/slide.css';
        
        export default function Example() {
            return (
                <div className="nav right-0 mr-4 fixed">
                    <Menu menuButton={<MenuButton><i class="fa-solid fa-bars text-violet "></i></MenuButton>} transition>
                        <MenuItem >
                        <Link to="/#Projects"><div className="home text-[16px] font-abel text-black hover:decoration-4 hover:decoration-violet">Home</div></Link> 
                        </MenuItem>
                        <MenuItem>
                           <div className="home text-[16px] font-abel text-black hover:decoration-4 hover:decoration-violet">Projects</div>
                        </MenuItem>
                        <MenuItem>
                            <div className="home text-[16px] font-abel text-black hover:decoration-4 hover:decoration-violet">Contact</div>
                        </MenuItem>
                    </Menu>
                </div>
            );
        }     
     