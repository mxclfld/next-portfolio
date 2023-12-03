import { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type SocialsType = {
  icon: IconType;
  link: string;
  label: string;
};

export const socials: SocialsType[] = [
  {
    icon: FaGithub,
    link: "https://github.com/mxclfld",
    label: "Github Link",
  },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/diana-kosovan-6a1383249/",
    label: "Linkedin Link",
  },
];
