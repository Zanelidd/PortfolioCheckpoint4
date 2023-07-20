import { useEffect, useState } from "react";
import style from "./styles/ProjectCards.module.css";
import PropTypes from "prop-types";
import axios from "axios";

const ProjectCards = ({ project }) => {
  const [skillsValue, setSkillsValue] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/projects/${project.id}/skills`)
      .then((response) => {
        setSkillsValue(response.data);
      })
      .catch((err) => console.error(err));
  }, [project.id]);

  console.log(skillsValue);
  return (
    <div className={style.project_container}>
      <h2 className={style.project_title}>{project.title}</h2>
      <div className={style.info_container}>
        <img
          className={style.project_img}
          src={`${import.meta.env.VITE_BACKEND_URL}/upload/${project.img}`}
          alt={project.title}
        />
        <p className={style.project_text}>{project.description}</p>
      </div>
      <div className={style.skill_container}>
        {skillsValue.map((skillvalue) => {
          return (
            <img
              key={skillvalue.label}
              className={style.skill}
              src={`${import.meta.env.VITE_BACKEND_URL}/upload/${
                skillvalue.value
              }`}
              alt={skillvalue.label}
            />
          );
        })}
      </div>
    </div>
  );
};

ProjectCards.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCards;
