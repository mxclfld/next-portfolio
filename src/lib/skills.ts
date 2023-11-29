type SkillsType = {
  label: string;
  skillsList: string[];
};

export const skills: SkillsType[] = [
  {
    label: "Front End",
    skillsList: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS",
    ],
  },
  {
    label: "Back end",
    skillsList: ["Express.js", "Node.js", "Nest.js"],
  },
  {
    label: "UI Tools",
    skillsList: ["Material UI", "Tailwind CSS", "Ant Design"],
  },
  {
    label: "Databases",
    skillsList: ["MongoDB", "PostgreSQL"],
  },
  {
    label: "Other Tools",
    skillsList: [
      "Jest",
      "Git",
      "GitHub",
      "GitLab",
      "Visual Studio Code",
      "ESLint",
      "Docker",
    ],
  },
];
