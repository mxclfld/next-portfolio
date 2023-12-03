type WorkHistoryType = {
  id: number;
  projectName: string;
  startDate: string;
  endDate: string;
  companyName: string;
  companyLink: string;
  skills: string[];
  responsibilities: string | JSX.Element;
};

const Project = () => (
  <div className="flex flex-col gap-4">
    <p>
      Within my responsibilities, I undertook the development of both frontend
      and backend components. A key aspect of my work revolved around crafting
      functionality tailored for both custom surveys and analysis of the data
      gathered from these surveys.
    </p>
    <p>
      Individuals had the capability to initiate an anonymous survey, share the
      generated link with participants, and subsequently examine the data
      collected. The system facilitated not only the analysis of this data but
      also provided the ability to generate personalized, detailed reports based
      on the survey responses.
    </p>
  </div>
);

export const workHistory: WorkHistoryType[] = [
  {
    id: 2,
    projectName: "[NDA]",
    startDate: "June 2023",
    endDate: "Present",
    companyName: "CGS-Team",
    companyLink: "https://cgsteam.io/",
    skills: [
      "React",
      "Material UI",
      "React Router",
      "React-Query",
      "react-hook-form",
      'yup',
      'Jest'
    ],
    responsibilities:
      "In this project, I played a key role in developing user interfaces for both web and admin portals for a healthcare organization. I focused on creating visually appealing and intuitive designs, fostering effective communication with backend developers for system integration. Additionally, I was responsible for optimizing the site&apos;s performance. Site has 50k+ unique users per month.",
  },
  {
    id: 1,
    projectName: "[NDA]",
    startDate: "April 2023",
    endDate: "June 2023",
    companyName: "CGS-Team",
    companyLink: "https://cgsteam.io/",
    skills: [
      "React",
      "React Router",
      "Ant Design",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    responsibilities: <Project />,
  },
];
