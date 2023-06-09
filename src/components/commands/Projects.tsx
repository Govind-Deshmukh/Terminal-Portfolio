import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Don't Just Talk, Show me the code”? I got you. <br />
        Here are my projects you shouldn't misss . . . .
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "COVID19 VACCINE TRACKER",
    desc: "A website to check covid19 vaccine slot availability in India. Used API from CoWIN portal for fetching data",
    url: "https://govind-deshmukh.github.io/Covid-Vaccine-Tracker/",
  },
  {
    id: 2,
    title: "BULK EMAIL MARKETING WEBAPP",
    desc: " An email marketing web app using MERN and Python Flask. Used Firebase, Bootstrap and SMTP, AWS",
    url: "https://github.com/Govind-Deshmukh/sem7-project-phase1",
  },
  {
    id: 3,
    title: "ANIME STREAMING WEBSITE",
    desc: "An anime streaming website built with MERN stack. Used Appwrite, MUI and AWS",
    url: "https://github.com/Govind-Deshmukh/animetube.git",
  },
  {
    id: 4,
    title: "AUTONOMOUS DRONE (HOBBY PROJECT)",
    desc: "Built a fully autonomous Drone using Python Dronekit, OpenCV and Raspberry-pi. I have a huge interest in Robotics & UAV's.",
    url: "https://astro-paper.pages.dev/",
  },
];

export default Projects;
