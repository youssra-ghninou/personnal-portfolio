const Header = () => {
    return (  
        <div className="container flex flex-col font-abel items-center  justify-center px-4 pt-24 gap-4">
            <div className="name  items-center flex gap-4">
                 <i class="fa-solid fa-play text-violet"></i>
                 <div className="div text-[20px] text-violet ">YOUSSRA GHNINOU</div>
                 <i class="fa-solid fa-square text-violet"></i>
             </div>
            <div className="profile text-[14px] text-dviolet font-light text-center">I’m a software developer in the bay area who enjoys designing and building beautiful, performant, responsive websites </div>
        </div>
    );
}
 
export default Header;