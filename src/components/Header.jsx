import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { MdEmail} from 'react-icons/md'
import { IoIosAttach } from 'react-icons/io'

import Typical from 'react-typical'
const Header = () => {
    return (  
        <div className=" flex flex-col text-abel items-center  justify-center px-4 pt-11 gap-4">
            <div className="  items-center flex gap-4">
                 <i class="fa-solid fa-play text-violet"></i>
                 <div className=" text-[24px] lg:text-[55px] font-medium text-violet ">      
                 <Typical
                    steps={['Hello world! ', 1000, 'I am Youssra Ghninou', 500]}
                    wrapper="B"/>
                </div>
             </div>
            <div className=" text-[18px] md:w-8/12 md:text-[22px] text-dviolet dark:text-grey font-thin text-center">I am a software engineering student specialized in front-end development. My passion lies in creating lightning-fast web applications with pixel-perfect precision and clean, organized code. </div>
            <div className='flex flex-col gap-5 justify-center mb-4 md:flex-row md:justify-between'>
      <div className='flex justify-around md:gap-2 lg:gap-4'>
        <div className='text-2xl  text-dviolet dark:text-grey transition duration-500 lg:hover:bg-dark lg:p-2 lg:rounded-full   lg:hover:animate-bounce'>
          <a
            href='https://www.linkedin.com/in/youssra-ghninou/'
            className=''
            target='_blank'
          >
            <FaLinkedinIn />
          </a>
        </div>
        <div className='text-2xl  text-dviolet dark:text-grey transition duration-500 lg:hover:bg-dark lg:p-2 lg:rounded-full   lg:hover:animate-bounce'>
          <a
            href='mailto:ghninou.youssra@enim.ac.ma'
            className=''ss
            target='_blank'
          >
            <MdEmail />
          </a>
        </div>

        <div className='text-2xl  dark:text-grey text-dviolet transition duration-500 lg:hover:bg-dark lg:p-2 lg:rounded-full   lg:hover:animate-bounce'>
          <a href='https://github.com/youssra-ghninou' className='' target='_blank'>
            <FaGithub />
          </a>
        </div>
      </div>

    </div>
        </div>
    );
}
 
export default Header;
