import { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type SocialsInfo = { icon: IconType; link: string; label: string };

type SocialsType = {
  [key: string]: SocialsInfo;
};

export const socials: SocialsType = {
  github: {
    icon: FaGithub,
    link: "https://github.com/mxclfld",
    label: "Github Link",
  },
  linkedin: {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/diana-kosovan-6a1383249/",
    label: "Linkedin Link",
  },
};