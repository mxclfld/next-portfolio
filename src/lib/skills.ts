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
        color: "text-blue-500",
      },
      {
        label: "JavaScript",
        icon: FaJs,
        color: "text-primary",
      },
      {
        label: "HTML5",
        icon: FaHtml5,
        color: "text-red-600"
      },
      {
        label: "CSS",
        icon: FaCss3,
        color: "text-blue-500",
      },
      {
        label: "React",
        icon: FaReact,
        color: "text-blue-500",
      },
      {
        label: "Next.js",
        icon: SiNextdotjs,
        color: "text-slate-800",
      },
    ],
  },
  {
    label: "Back end",
    skillsList: [
      {
        label: "Express.js",
        icon: SiExpress,
        color: "text-green-400",
      },
      {
        label: "Node.js",
        icon: SiNodedotjs,
        color: "text-green-600",
      },
    ],
  },
  {
    label: "UI Tools",
    skillsList: [
      {
        label: "Material UI",
        icon: SiMui,
        color: "text-blue-500",
      },
      {
        label: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-blue-500",
      },
      {
        label: "Ant Design",
        icon: SiAntdesign,
        color: "text-red-600",
      },
    ],
  },
  {
    label: "Databases",
    skillsList: [
      {
        label: "MongoDB",
        icon: SiMongodb,
        color: "text-green-400",
      },
      {
        label: "PostgreSQL",
        icon: SiPostgresql,
        color: "text-blue-500",
      },
    ],
  },
  {
    label: "Other Tools",
    skillsList: [
      {
        label: "Jest",
        icon: SiJest,
      },
      {
        label: "Git",
        icon: SiGit,
      },
      {
        label: "GitHub",
        icon: FaGithub,
        color: 'text-white'
      },
      {
        label: "GitLab",
        icon: FaGitlab,
      },
      {
        label: "Visual Studio Code",
        icon: SiVisualstudiocode,
        color: 'text-blue-500'
      },

      {
        label: "ESLint",
        icon: SiEslint,
      },
      {
        label: "Docker",
        icon: FaDocker,
        color: 'text-blue-500'
      },
    ],
  },
];
