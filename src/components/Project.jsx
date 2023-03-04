import { uid } from "uid";
import Stacks from "./Stacks";
const Project = () => {
    const Project = [
        {
            title: 'clipboard-landing-page-master',
            content: 'Clipboard landing page with single section challenge on Frontend Mentor',
            image: '/images/mask.jpg',
            code: 'https://github.com/youssra-ghninou/clipboard-landing-page-master',
            demo: 'https://youssra-ghninou.github.io/clipboard-landing-page-master/',
        },        {
            title: 'Taste Now',
            content: 'A web application for food delivery',
            image: '/images/tastenow.png',
            code: 'https://github.com/youssra-ghninou/taste-now',
            demo: 'https://taste-now.vercel.app/',
        },
        {
            image: '/images/i2i.png',
            title: 'Infogérance et Ingénierie Informatique',
            content: 'A web application for the company I2I',
            code: 'https://github.com/youssra-ghninou/i2i-infogerance',
            demo: 'https://www.info2i.com/',
        },
        {
            title: 'ussra.me',
            content: 'My personal portfolio',
            image: '/images/portfolio.png',
            code: 'https://github.com/youssra-ghninou/personnal-portfolio',
            demo: 'https://www.ussra.me/',
        },

        {
            title: 'DevBlog',
            content: 'A blog from developers to developers',
            image: '/images/devblog.png',
            code: 'https://github.com/youssra-ghninou/dev_blog',
            demo: 'https://dev-blog-ruby.vercel.app/',
        },

        {
            title: 'Skills Builder',
            content: 'A video tutorial platform for e-learning (LMS)',
            image: '/images/skillsbuilder.png',
            code: 'https://github.com/DevMeFly/devfly_itholic',
            demo: 'https://devfly-itholic.vercel.app/',
        },

    ];
    return (
        <>
            <div className="flex flex-col gap-6  md:grid md:grid-cols-2 lg:grid-cols-3 md:mb-11" id='Project'>
                {Project.reverse().map(({ id, title, content, image, code, demo}) => {
                    return (
                        <div key={uid()} className="rounded-[10px] shadow-md gap-3 bg-white  mx-3  flex flex-col text-left px-2 py-2 md:justify-center">
                            <div className="">
                                <img className="rounded-[10px] h-[200px] w-full transition ease-in-out delay-150 bg-gray-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" src={image} alt={title} />
                            </div>
                            <div className="px-4 pb-4 flex flex-col gap-4">
                                <div className="flex items-center text-[20px] font-bold text-abel text-violet  ">
                                    {title}
                                </div>
                                <div className="text-[14px] text-abel">
                                    {content}
                                </div>
                                <div className="sta flex gap-2">
                                   <Stacks text='HTML5'/>
                                   <Stacks text='CSS3'/>
                                   <Stacks text='Javascript'/>
                                   <Stacks text='ReactJS'/>
                                </div> 
                                <div className="dem flex gap-2 items-center justify-end pr-4">
                            <div> 
                                   <button className="bg-violet flex items-center  rounded-[5px] px-2 py-3 h-[24.94px] shadow-lg ">
                                   <a href={demo} target='_blank'  className="font-abel text-center  text-grey justify-center items-center text-[9px] ">
                                       Demo
                                    </a>
                                   </button>
                                </div>
                                <div>
                                    <button className="bg-violet shadow-lg flex items-center  rounded-[5px] px-2 py-3 h-[24.94px]">
                                     <a  href={code} target='_blank' className="font-abel text-center  text-grey justify-center items-center text-[9px]">
                                         Code Source
                                    </a>
                                    </button>
                                </div>
                            </div>                  

                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Project;