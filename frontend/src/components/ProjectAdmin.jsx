import style from "../pages/styles/Admin.module.css";
import PropTypes from "prop-types";

const ProjectAdmin = ({
  projects,
  HandleDeleteModal,
  HandleAddModal,
  HandleModifyModal,
  skills,
  setSelectProject,
}) => {
  return (
    <>
      <button
        className={style.add_button}
        type="button"
        onClick={() => {
          HandleAddModal();
        }}
      >
        Ajouter un projet
      </button>

      <div className={style.projects_list}>
        <div className={style.header_project_line}>
          <div className={style.project_block}>Nom du projet</div>
          <div className={style.project_block}>Description </div>
          <div className={style.project_block}>Technologies</div>
          <div className={style.project_block}>Image</div>
          <div className={style.project_block}>Mise à jour</div>
          <div className={style.project_block}>Supprimer</div>
        </div>
        {projects?.map((project) => {
          return (
            <div key={project.id} className={style.project_line}>
              <div className={style.project_block}>{project.title}</div>
              <div className={style.project_block_text}>
                {project.description}
              </div>
              <div className={style.project_block_techno}>
                {skills?.map((skill) => {
                  return (
                    skill.project_id === project.id && (
                      <div key={skill.id} className={style.project_block}>
                        <img
                          className={style.project_img}
                          src={`${import.meta.env.VITE_BACKEND_URL}/upload/${
                            skill.value
                          }`}
                          alt={skill.label}
                        />
                      </div>
                    )
                  );
                })}
              </div>
              <div className={style.project_block}>{project.img}</div>
              <div className={style.project_block}>
                <img
                  className={style.project_img}
                  src="/src/assets/rafraichir.png"
                  alt="update"
                  onClick={() => {
                    HandleModifyModal(), setSelectProject(project);
                  }}
                />
              </div>

              <div className={style.project_block}>
                <img
                  className={style.project_img}
                  src="/src/assets/supprimer.png"
                  alt="delete"
                  onClick={() => {
                    HandleDeleteModal(), setSelectProject(project);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

ProjectAdmin.propTypes = {
  HandleAddModal: PropTypes.func.isRequired,
  HandleDeleteModal: PropTypes.func.isRequired,
  HandleModifyModal: PropTypes.func.isRequired,
  setSelectProject: PropTypes.func.isRequired,
  projects: PropTypes.array.isRequired,
  skills: PropTypes.array.isRequired,
};

ProjectAdmin.defaultProps = {
  HandleAddModal: () => {
    "toto";
  },
  HandleDeleteModal: () => {
    "toto";
  },
  HandleModifyModal: () => {
    "toto";
  },
  setSelectProject: () => {
    "toto";
  },
  projects: [],
  skills: [],
};
export default ProjectAdmin;
