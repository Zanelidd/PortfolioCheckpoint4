import { useEffect, useState } from "react";
import ProjectCards from "../components/ProjectCards";
import axios from "axios";
import style from "./styles/Projects.module.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/projects`)
      .then((response) => {
        setProjects(response.data);
      })
      .catch((err) => console.error(err));
  }, []);
  console.log(projects);
  return (
    <>
      <h1>Projects</h1>
      <div className={style.project_cards}>
        {projects.map((project) => {
          return <ProjectCards key={project.id} project={project} />;
        })}
      </div>
    </> 
  );
};

export default Projects;
