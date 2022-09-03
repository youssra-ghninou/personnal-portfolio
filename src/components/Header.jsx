import Typical from 'react-typical'
const Header = () => {
    return (  
        <div className="container flex flex-col text-abel items-center  justify-center px-4 pt-24 gap-4">
            <div className="name  items-center flex gap-4">
                 <i class="fa-solid fa-play text-violet"></i>
                 <div className="div text-[20px] md:text-[55px] font-thin text-violet ">      
                 <Typical
                    steps={['Hello world! ', 1000, 'I am Youssra Ghninou', 500]}
                    wrapper="B"/>
                </div>
             </div>
            <div className="profile text-[14px] md:text-[22px] text-dviolet font-light text-center">I’m a software developer in the bay area who enjoys designing and building beautiful, performant, responsive websites </div>
        </div>
    );
}
 
export default Header;