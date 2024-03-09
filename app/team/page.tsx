import Container from "@/app/ui/team/contFile";

export default function Page() {
    return(<div className="w-full">
        <div className="mx-auto w-min flex flex-col justify-end items-end my-4 md:my-16">
        <h1 className="mx-auto w-max text-[--pc] text-4xl  sm:text-6xl font-bold">Meet the team</h1>
        <div className="w-3/4 h-2 bg-yellow-500"></div>
        </div>
        <div className="bg-team-page bg-no-repeat bg-center bg-contain  w-full flex flex-col items-center pb-11">
        <Container source="/Images/PowerBi_sir.png" desig="" right={false} name="Mr. Shishir Dhangar"  desp="Meet Mr. Shishir: Your go-to expert in Power BI and Tableau. With a stellar record in fraud detection and customer segmentation for major brands like ICICI Bank and Nestle, he's your key to turning data into actionable insights. Known for his dynamic dashboards and custom corporate training, he blends analytics, automation, and strategy to fuel growth and boost efficiency."/>
        <Container source="/Images/Simran_img.jpeg" desig="" right={true} name="Mr. Simrandeep Singh"  desp=" Mr. Singh is a Devoted Professional Who has proven analytical excellence in Data Analytics.Mr. Singh has been a critical Content writer on LinkedIn focussing on youth employment and education at the platform.With Major focus on youth employability. Along With that he possesses advanced skills in Data analytic in Excel,SQl,Power BI and Tableau he has Contributed in some crucial data visualization projects."/>
        <Container source="/Images/Pranav_img.jpg" desig=" Mentor, Back-End Development " right={false} name="Mr. Pranav Gupta"  desp="Mr. Kumar is an Innovative IT professional with a proven track record of over 6 years in the industry, fueling business success through cutting-edge solutions. His expertise lies in Microsoft technologies, including MVC, .NET Core, and Azure, coupled with a solid grasp of frontend technologies like Angular and React. He is keen to explore new opportunities in the ever-evolving IT field, where I can contribute my skills and expertise to drive impactful change."/>
        <Container source="/Images/Navjot_img.jpeg" desig="" name="Mr. Navjot Singh" right={true}  desp="An ambitious and dedicated Computer Science Engineering student at Chitkara University specializing in Front-End Development. With a profound expertise in technologies such as React, Next.js, Bootstrap, and Tailwind CSS, I have honed my craft in creating captivating and user-centric web experiences. My journey as a front-end developer is fueled by a passion for innovation and a relentless pursuit of mastering emerging technologies."/>
        </div>
    </div>);
}