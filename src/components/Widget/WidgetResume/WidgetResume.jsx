import React from "react";
import style from "./WidgetResume.module.scss";
import Masonry from "react-masonry-css";
import Divider from "@material-ui/core/Divider";

import { IconContext } from "react-icons";
import {
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaSass,
  FaDatabase,
  FaTools,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";
import { GiJasmine } from "react-icons/gi";
import {
  SiMaterialUi,
  SiJquery,
  SiFlask,
  SiDjango,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiJupyter,
  SiMdnwebdocs,
  SiHtml5,
  SiCss3,
  SiWebpack,
  SiSocketDotIo,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiRedux,
  SiUbuntu,
  SiGooglecloud,
  SiHeroku,
  SiNetlify,
} from "react-icons/si";

const WidgetResume = () => {
  const skills = [
    {
      _id: 1,
      icon: <SiJavascript />,
      name: "JavaScript",
      elements: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "React", icon: <FaReact /> },
        { name: "Redux", icon: <SiRedux /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "JQuery", icon: <SiJquery /> },
        { name: "Material UI", icon: <SiMaterialUi /> },
        { name: "Jasmine", icon: <GiJasmine /> },
        { name: "Socket.io", icon: <SiSocketDotIo /> },
        { name: "Webpack", icon: <SiWebpack /> },
      ],
    },
    {
      _id: 2,
      icon: <SiPython />,
      name: "Python",
      elements: [
        { name: "Flask", icon: <SiFlask /> },
        { name: "Django", icon: <SiDjango /> },
        { name: "Jupyter Notebooks", icon: <SiJupyter /> },
      ],
    },
    {
      _id: 3,
      icon: <SiMdnwebdocs />,
      name: "Web Development",
      elements: [
        { name: "HTML5", icon: <SiHtml5 /> },
        { name: "CSS3", icon: <SiCss3 /> },
        { name: "SASS/SCSS", icon: <FaSass /> },
        { name: "Bootstrap 4", icon: <FaBootstrap /> },
      ],
    },
    {
      _id: 4,
      icon: <FaDatabase />,
      name: "Databases",
      elements: [
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Redis", icon: <SiRedis /> },
      ],
    },
    {
      _id: 5,
      icon: <FaTools />,
      name: "Other",
      elements: [
        { name: "Git/GitHub", icon: <FaGitAlt /> },
        { name: "Ubuntu", icon: <SiUbuntu /> },
        { name: "AWS", icon: <FaAws /> },
        { name: "Google Cloud", icon: <SiGooglecloud /> },
        { name: "Heroku", icon: <SiHeroku /> },
        { name: "Netlify", icon: <SiNetlify /> },
      ],
    },
  ];

  const skillsResult = skills.map((skillsParent) => (
    <div key={skillsParent._id}>
      <div className={style.wrapItemContent}>
        <div className={style.skillTitle}>
          <IconContext.Provider value={{ className: style.icon }}>
            <div>{skillsParent.icon}</div>
          </IconContext.Provider>
          <div className={style.title}>{skillsParent.name}</div>
        </div>
        <Divider />
        <div className={style.skillItems}>
          {skillsParent.elements.map((skillsChild, item) => (
            <WidgetResumeItem key={item} skillsChild={skillsChild} />
          ))}
        </div>
      </div>
    </div>
  ));

  return (
    <Masonry
      breakpointCols={2}
      className={style.grid}
      columnClassName={style.gridColumn}
    >
      {skillsResult}
    </Masonry>
  );
};

const WidgetResumeItem = ({ skillsChild }) => {
  return (
    <div className={style.skills}>
      <div className={style.skillItem}>
        <IconContext.Provider value={{ className: style.icon }}>
          <div>{skillsChild.icon}</div>
        </IconContext.Provider>
        <div className={style.skillsTitle}>{skillsChild.name}</div>
      </div>
    </div>
  );
};
export default WidgetResume;
