import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const frontendSkills = [
    "React",
    "Angular",
    "Typescript",
    "JavaScript",
    "HTML",
    "CSS",
    "Bootstrap",
    "MaterialUI",
    "TailwindCSS",
    "JQuery",
  ];

  const backendSkills = ["ASP.NET MVC", "ASP.NET CORE", "ASP.NET CORE Web API", "SQL Server", "MySQL", "AWS", "IIS", "C#", "Java"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills &&
                    frontendSkills.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                      >
                        {tech}
                      </span>
                    ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills &&
                    backendSkills.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                      >
                        {tech}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold">🎓 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>College: B.S in Computer Science</strong> - National College of Science and Technology
                  (2018-2022)
                </li>
                <li>
                  <strong>Secondary: Information Communcation Technology</strong> - Colegio De Porta Vaga
                  (2016-2018)
                </li>
                <li>
                  <strong>Elementary: </strong> - Lincod Elementary School
                  (2010-2011)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold">🎓 Certificates</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Most Outstanding Undergraduate Research (Best in Thesis)</strong> - National College of Science and Technology
                  (2018-2022)
                  The Implementation of GNANCE: A Web and Android Phone Based Accounting and Finance System for Merchandising Businesses<br />
                  -	GNANCE is an accounting and finance system that aims to help merchandising businesses manage their business accounting operations effortlessly.

                </li>
                <li>
                  <strong>C# Programming Competition in Colegio De Porta Vaga (Senior High 2017)</strong> Fastest in drag and drop design and able to meet the full feature of digital clock
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold">💻 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Full stack React .Net Developer<br />
                    Systemantech Client: (S&r Membership Shopping) &nbsp;&nbsp;&nbsp;&nbsp;
                    (Nov 27, 2024 - Present)
                  </h4>
                  <p>
                    <strong>Responsibilities:</strong><br />
                    •	Order Web Form Project: Create a Frontend and Backend Services for Order worksheet System (Worksheet System) Project.<br />
                    •	Create a Realtime Sales Forecast depends of last year sales actual and this year sales actual<br />
                    •	Closely interaction and collaboration to Project Manager, Business Technology Lead, for new requirements<br />
                    •	Code reviews and commits in Git repository with co developers<br />
                    •	Warehouse (inbound, outbound, letdown, master list) project: Create a from scratch Backend and Frontend using Asp.net core web API (for backend) React (for Frontend).<br />
                    •	Track the inbound items, outbound items and transfer items to another shelf<br />
                    •	Track the expiry of each enrolled SKUs<br />
                    Environment: React18, C#, .Net Core 7 Web API, HTML, CSS, JavaScript, SQLServer2019, IIS
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Full stack React .Net Developer<br />
                    Vértere Global Solutions Client: (PSBank Philippine Savings Bank) &nbsp;&nbsp;&nbsp;&nbsp;
                    (May 24, 2024 – Nov 26, 2024)
                  </h4>
                  <p>
                    <strong>Responsibilities:</strong><br />
                    •	ESMS Project: Create a dashboard for ESMS (Electronic Short Message Service) Project. <br />
                    •	Redesign the old dashboard into new User Interface <br />
                    •	Closely interaction and collaboration to Project Manager, Business Analyst, and Tech lead for new requirements <br />
                    •	Code reviews and commits in Git repository with co developers <br />
                    •	Run the CI / CD pipeline in Dev Environment <br />
                    •	Live chat project: Redesign the Old live chat in corporate site of PSBank from .Net MVC to .Net Core and React Technology. <br />
                    •	Able to deliver the project of live chat from scratch ahead of time without issues <br />
                    Environment: React17, C#, .Net Core 7 Web API, HTML, CSS, JavaScript, SQLServer2019
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Senior Analyst Programmer<br />
                    Collabera Digital Client: (Essilor Shared Service Philippines Incorporated)&nbsp;&nbsp;&nbsp;&nbsp;
                    (February 08, 2023 – May 24, 2024)
                  </h4>
                  <p>
                    <strong>Responsibilities:</strong><br />
                    •	Spearhead the maintenance of Ecommerce software utilizing Angular and C# .Net Core 7 Web API, ensuring seamless functionality and optimal performance. <br />
                    •	Provide mentorship and guidance to Junior Analyst Programmers, fostering a collaborative environment and imparting best practices to enhance team proficiency. <br />
                    •	Actively participate in Daily Standup Meetings, facilitating transparent communication and strategizing task delivery timelines with the team. <br />
                    •	Foster collaboration among developers through comprehensive code reviews and proactive participation in pull request discussions for the latest branch updates. <br />
                    Environment: Angular, C#, .Net Core 7 Web API, HTML, CSS, JavaScript, TypeScript, SQLServer2019
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    JR .NET Developer<br />
                    Posbang Corporation&nbsp;&nbsp;&nbsp;&nbsp;
                    (July 27, 2022 – January 12, 2023)
                  </h4>
                  <p>
                    <strong>Responsibilities:</strong><br />
                    •	Utilized Angular framework for front-end development, ensuring intuitive user experiences and responsive interfaces.<br />
                    •	Implemented Repository Pattern to streamline data access and management within the application. <br />
                    •	Leveraged .NET Core (Entity Framework Core) for back-end development, facilitating efficient data processing and storage.<br />
                    •	Managed system maintenance activities to uphold system integrity and optimize performance.<br />
                    •	Rectified UI issues promptly, enhancing user satisfaction and usability.<br />
                    •	Developed APIs to enable seamless communication between different components of the system.<br />
                    •	Conducted thorough bug identification and resolution to maintain a stable and error-free application.<br />
                    •	Facilitated Git operations including merging, pushing, and pulling to ensure effective collaboration and version control.<br />
                    •	Designed and implemented CRUD operations on the website, contributing to enhanced functionality and user interaction.<br />
                    •	Deployed projects to AWS S3, ensuring reliable and scalable hosting solutions.<br />
                    Environment: Angular, HTML5, .NET, Bootstrap 5
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    JR .NET Developer (Intern)<br />
                    Atlas Express Padala (Longares Global Operations)&nbsp;&nbsp;&nbsp;&nbsp;
                    (April 01, 2022 – July 15, 2022)
                  </h4>
                  <p>
                    <strong>Responsibilities:</strong><br />
                    •	Junior Software Developer Intern<br />
                    •	Front end using angular framework.<br />
                    •	Back End using dotnet core (entity framework) core.<br />
                    •	Maintaining System<br />
                    •	Fixing UI<br />
                    •	Creating API<br />
                    •	Finding bugs and create fixes.<br />
                    •	Developing API and creating crud operations on the website<br />
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    On-the-job trainee<br />
                    Wuhan Fiber home International Technologies Phils.INC,&nbsp;&nbsp;&nbsp;&nbsp;
                    (November 25, 2017 – January 3, 2018)
                  </h4>
                  <p>
                    <strong>Responsibilities:</strong><br />
                    •	Desktop Support<br />
                    •	Filing of receipt<br />

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
