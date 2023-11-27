import { IconType } from "react-icons";
import {
  FaCss3,
  FaDocker,
  FaGithub,
  FaGitlab,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";
import {
  SiAntdesign,
  SiEslint,
  SiExpress,
  SiGit,
  SiJest,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
} from "react-icons/si";

type SkillType = {
  label: string;
  icon: IconType;
  color?: string;
};

type SkillsType = {
  label: string;
  skillsList: SkillType[];
};

export const skills: SkillsType[] = [
  {
    label: "Front End",
    skillsList: [
      {
        label: "TypeScript",
        icon: SiTypescript,
        color: "blue-500",
      },
      {
        label: "JavaScript",
        icon: FaJs,
        color: "primary",
      },
      {
        label: "HTML5",
        icon: FaHtml5,
        color: "red-600",
      },
      {
        label: "CSS",
        icon: FaCss3,
        color: "blue-500",
      },
      {
        label: "React",
        icon: FaReact,
        color: "blue-500",
      },
      {
        label: "Next.js",
        icon: SiNextdotjs,
        color: "slate-800",
      },
    ],
  },
  {
    label: "Back end",
    skillsList: [
      {
        label: "Express.js",
        icon: SiExpress,
        color: "green-400",
      },
      {
        label: "Node.js",
        icon: SiNodedotjs,
        color: "green-600",
      },
    ],
  },
  {
    label: "UI Tools",
    skillsList: [
      {
        label: "Material UI",
        icon: SiMui,
        color: "blue-500",
      },
      {
        label: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "blue-500",
      },
      {
        label: "Ant Design",
        icon: SiAntdesign,
        color: "red-600",
      },
    ],
  },
  {
    label: "Databases",
    skillsList: [
      {
        label: "MongoDB",
        icon: SiMongodb,
        color: "green-400",
      },
      {
        label: "PostgreSQL",
        icon: SiPostgresql,
        color: "blue-500",
      },
    ],
  },
  {
    label: "Other Tools",
    skillsList: [
      {
        label: "Jest",
        icon: SiJest,
        color: "red-700",
      },
      {
        label: "Git",
        icon: SiGit,
        color: "red-600",
      },
      {
        label: "GitHub",
        icon: FaGithub,
        color: "white",
      },
      {
        label: "GitLab",
        icon: FaGitlab,
        color: "orange-500",
      },
      {
        label: "Visual Studio Code",
        icon: SiVisualstudiocode,
        color: "blue-500",
      },

      {
        label: "ESLint",
        icon: SiEslint,
        color: "purple-600",
      },
      {
        label: "Docker",
        icon: FaDocker,
        color: "blue-500",
      },
    ],
  },
];
