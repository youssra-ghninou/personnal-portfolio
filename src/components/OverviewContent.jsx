const OverviewContent = () => {
    const interests = [{
        id : 1,
        title: '> Youssra.currentLocation ',
        content: '“Fez, Morocco”',
      },
      {
        id : 2,
        title: '> Youssra.contactInfo',
        content: '[“ghninou177@gmail.com”, LinkedIn, github]',
      },
      {
        id : 3,
        title: '> Youssra.resume',
        content: 'ussra.pdf',
      },
      {
        id : 4,
        title: '> Youssra.interests',
        content: '[“design”, “webdev”, “reading”, “drawing”, “writing”]',
      },
      {
        id : 5,
        title: '>Youssra.education',
        content: '“National School of Mines of Rabat, Morocco”',
      },
      {
        id : 6,
        title: '> Youssra.skills',
        content: '[“HTML5”, “CSS3”, “Javascript”, “Tailwind CSS”, “ReactJS”, “Bootstrap”, “Node.js”, “SQL Server”, “MySQL”]',
      },
      {
        id : 7,
        title: '> Youssra.tools',
        content: '[“git”, “Netlifiy”, “Jira”, “NPM”]',
      },

    ];  
    return ( 
        <div className="flex flex-col gap-4 px-4 py-6  ">
        {interests.map(({id,title,content}) => {
        return(
            <div key={id} className="flex flex-col gap-1 ">
                <div className="text-white font-normal text-[10px] font-abel">
                    {title}
                </div>
                <div className="text-yellow font-thin text-[10px] font-abel">
                    {content}
                </div>
            </div>
        );
    })}
    </div>
     );
}
 
export default OverviewContent;