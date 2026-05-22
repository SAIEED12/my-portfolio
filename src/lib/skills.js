import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiPostman,
  SiExpress,
} from "react-icons/si";

export const FigmaOriginalIcon = ({ size = 48, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 38 57" xmlns="http://www.w3.org/2000/svg" style={style}>
    <path fill="#E24C4B" d="M19 28.5c0-5.247-4.253-9.5-9.5-9.5H0v9.5c0 5.247 4.253 9.5 9.5 9.5h9.5v-9.5z" />
    <path fill="#F24E1E" d="M0 9.5C0 4.253 4.253 0 9.5 0H19v19H9.5C4.253 19 0 14.747 0 9.5z" />
    <path fill="#FF7262" d="M19 0h9.5C33.747 0 38 4.253 38 9.5s-4.253 9.5-9.5 9.5H19V0z" />
    <path fill="#1ABCFE" d="M19 19h9.5c5.247 0 9.5 4.253 9.5 9.5s-4.253 9.5-9.5 9.5H19V19z" />
    <path fill="#0ACF83" d="M9.5 57C14.747 57 19 52.747 19 47.5V38H9.5C4.253 38 0 42.253 0 47.5S4.253 57 9.5 57z" />
  </svg>
);

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" }, 
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "Figma", icon: FigmaOriginalIcon, color: "transparent" }, 
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
];