const OverviewContent = () => {
    const interests = [{
        id : 1,
        title: "> Current location",
        content: '“Rabat, Morocco”',
      },
      {
        id : 5,
        title: "> Education",
        content: '“National School of Mines of Rabat, Morocco”',
      },
      {
        id : 6,
        title: '> Skills',
        content: '[“HTML5”, “CSS3”, “Javascript”, “Tailwind CSS”, “Bootstrap”, “ReactJS”, “Next.js”, “SQL Server”, “MySQL”]',
      },
      {
        id : 7,
        title: '> Tools',
        content: '[“Github”, “Git”, “Figma”, “Vercel”, “Netlifiy”, “Jira”, “Zenhub”]',
      },

      {
        id : 4,
        title: '> Interests',
        content: '[“Design”, “Gaming”, “Reading”, “Drawing”, “Writing”]',
      },

    ];  
    return ( 
        <div className="flex flex-col gap-4 px-4 py-6  ">
        {interests.map(({id,title,content}) => {
        return(
            <div key={id} className="flex flex-col gap-1 ">
                <div className="text-white font-bold text-[20px]  text-abel">
                    {title}
                </div>
                <div className="text-yellow font-medium text-[16px]  text-abel">
                    {content}
                </div>
            </div>
        );
    })}
    </div>
     );
}
 
export default OverviewContent;