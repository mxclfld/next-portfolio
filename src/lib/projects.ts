export type ProjectType = {
  title: string;
  repository: string;
  description: string;
  skills: string[];

  img?: string;
  deploy?: string;

  startDate?: Date;
  endDate: Date;
};

export const projects: ProjectType[] = [
  {
    title: "Todo App",
    skills: [],
    description:
      "An application to manage your todo's. You can either search by todos or filter them by private, public or completed.",
    repository: "https://github.com/mxclfld/cgs-team-camp",
    img: "",
    endDate: new Date(2023, 3),
  },
  {
    title: "Weather App",
    skills: ["React", "Tailwind CSS", "axios", "Highcharts"],
    description:
      "App delivers real-time updates and forecasts, empowering users to plan activities with current and upcoming weather insights",
    repository: "https://github.com/mxclfld/weather-app",
    img: "/weather-app.png",
    deploy: "https://mxclfld-weather-app.netlify.app/",
    endDate: new Date(2022, 7),
  },
  {
    title: "Notes App",
    skills: ["TypeScript", "React", "react-router", "redux", "Bootstrap"],
    description:
      "Simple CRUD application to create, read, update and delete notes.",
    repository: "https://github.com/mxclfld/notes-app",
    img: "/notes-app.png",
    deploy: "https://mxclfld-notes-app.netlify.app/",
    endDate: new Date(2022, 0),
  },
  {
    title: "Rick and Morty",
    skills: [
      "TypeScript",
      "React",
      "TailwindCSS",
      "GraphQL",
      "OAuth",
      "react-router",
    ],
    description:
      "Gallery of Rick and Morty characters. User can search for characters and take a look at detailed info.",
    repository: "https://github.com/mxclfld/reenbit-test-task",
    img: "/rick-and-morty.png",
    deploy: "https://mxclfld-reenbit-test-task.netlify.app/",
    endDate: new Date(2022, 1),
  },
];
