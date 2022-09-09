import Stacks from "./Stacks";
const Project = () => {
    const Project = [
        {
            id: 1,
            image: '/images/i2i.png',
            title: 'i2i-infogerance',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
            code: 'https://github.com/youssra-ghninou/i2i-infogerance',
            demo: 'https://www.info2i.com/',
        },
        {
            id: 2,
            title: 'Chat-app-css-illustration-master',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
            image: '/images/chat app.jpg',
            code: 'https://github.com/youssra-ghninou/chat-app-css-illustration-master',
            demo: 'https://youssra-ghninou.github.io/chat-app-css-illustration-master/',
        },
        {
            id: 3,
            title: 'huddle-landing-page-with-alternating-feature-blocks-master ',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
            image: '/images/huddle.jpg',
            code: 'https://github.com/youssra-ghninou/huddle-landing-page-with-alternating-feature-blocks-master',
            demo: 'https://youssra-ghninou.github.io/huddle-landing-page-with-alternating-feature-blocks-master/',
        },
        {
            id: 4,
            title: 'clipboard-landing-page-master',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
            image: '/images/mask.jpg',
            code: 'https://github.com/youssra-ghninou/clipboard-landing-page-master',
            demo: 'https://youssra-ghninou.github.io/clipboard-landing-page-master/',
        },
    ];
    return (
        <>
            <div className="flex flex-col gap-6 md:gap-32 md:grid md:grid-cols-2 md:mb-11" id='Project'>
                {Project.map(({ id, title, content, image, code, demo}) => {
                    return (
                        <div key={id} className="rounded-[10px] shadow-md gap-6 md:gap-6 bg-white md:w-[300px]  mx-3  flex flex-col text-left px-2 py-2 md:justify-center">
                            <div className="">
                                <img className="rounded-[10px]  transition ease-in-out delay-150 bg-gray-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" src={image} alt={title} />
                            </div>
                            <div className="px-4 pb-4 flex flex-col gap-6">
                                <div className="flex items-center text-[18px] text-bold text-abel text-violet  ">
                                    {title}
                                </div>
                                <div className="text-[10px] text-abel">
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
                                       VIEW PROJECT
                                    </a>
                                   </button>
                                </div>
                                <div>
                                    <button className="bg-violet shadow-lg flex items-center  rounded-[5px] px-2 py-3 h-[24.94px]">
                                     <a  href={code} target='_blank' className="font-abel text-center  text-grey justify-center items-center text-[9px]">
                                         GITHUB
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