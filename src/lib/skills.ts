export type SkillsType = {
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
    label: "Back End",
    skillsList: ["Express.js", "Node.js", "Nest.js"],
  },
  {
    label: "UI Tools",
    skillsList: ["Material UI", "Tailwind CSS", "Ant Design"],
  },
  {
    label: "Databases",
    skillsList: ["MongoDB", "PostgreSQL", "MySQL", "Prisma", "TypeORM"],
  },
  {
    label: "Other Tools",
    skillsList: [
      "Jest",
      "Git",
      "GitHub",
      "GitLab",
      "Postman",
      "ESLint",
      "Docker",
      "CI/CD",
      "Vercel",
      "yup",
      "zod",
    ],
  },
];
