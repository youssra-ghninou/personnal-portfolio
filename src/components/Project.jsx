import Stacks from "./Stacks";
import ViewProject from "./ViewProject";
import Github from "./Github";

const Project = (props) => {
    return (
        <div className="div  rounded-6 gap-6 lg:gap-1 lg:h-[400px] lg:w-[300px] mx-3 my-3 flex flex-col text-left px-5 justify-center ">
            <div className={`flex items-center text-[18px] text-bold font-abel text-violet   `+props.className}>
                {props.text}
            </div>
            <div className="text text-[10px] text-abel">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </div>
            <div className="sta flex gap-2">
                <Stacks text='HTML5'/>
                <Stacks text='CSS3'/>
                <Stacks text='Javascript'/>
                <Stacks text='ReactJS'/>
            </div>
            <div className="dem flex gap-2 items-center justify-end pr-4 ">
            <ViewProject/>
            <Github/>
            </div>
        </div>
    );
}
 
export default Project;