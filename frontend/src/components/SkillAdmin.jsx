import axios from "axios";
import style from "../pages/styles/Admin.module.css";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const SkillAdmin = ({
  HandleSkillsModal,
  setSelectedSkills,
  HandleDeleteSkillsModal,
}) => {
  const [skills, setSkills] = useState();

  const [skillName, setSkillName] = useState();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/skill`).then((response) => {
      setSkills(response.data);
    });
  }, []);

  const inputRef = useRef();

  const HandleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", inputRef.current.files[0]);

    console.log(inputRef.current.files[0]);
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/upload`, FormData)
      .then((response) => {
        console.log(response.data);
        if (response.status === 201) {
          axios.post(`${import.meta.env.VITE_BACKEND_URL}/skills`, {
            label: skillName,
            value: response.data.newUploadedFileName,
          });
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className={style.skill_list}>
        <div className={style.header_project_line}>
          <div className={style.project_block}>Skill</div>
          <div className={style.project_block}>Logo</div>
          <div className={style.project_block}>Mise à jour</div>
          <div className={style.project_block}>Supprimer</div>
        </div>
        {skills?.map((skill) => {
          return (
            <div key={skill.id} className={style.project_line}>
              <div className={style.project_block}>{skill.label}</div>
              <div className={style.project_block}>
                <img
                  className={style.project_img}
                  src={`${import.meta.env.VITE_BACKEND_URL}/upload/${
                    skill.value
                  }`}
                  alt={skill.label}
                />
              </div>
              <div className={style.project_block}>
                <img
                  className={style.project_img}
                  src="/assets/rafraichir.png"
                  alt="update"
                  onClick={() => {
                    HandleSkillsModal();
                    setSelectedSkills(skill);
                  }}
                />
              </div>

              <div className={style.project_block}>
                <img
                  className={style.project_img}
                  src="/assets/supprimer.png"
                  alt="delete"
                  onClick={() => {
                    HandleDeleteSkillsModal();
                    setSelectedSkills(skill);
                  }}
                />
              </div>
            </div>
          );
        })}
        <form
          className={style.skill_form}
          encType="multipart/form-data"
          id="myForm"
          name="myForm"
          onSubmit={HandleSubmit}
        >
          <div className={style.header_skill_add}>
            <input
              className={style.project_block}
              type="text"
              id="Title"
              onChange={(e) => {
                setSkillName(e.target.value);
              }}
            />
            <label htmlFor="img" className={style.label_img}>
              Ajout de fichier
              <input
                className={style.project_block}
                type="file"
                id="img"
                ref={inputRef}
              />
            </label>
            <div className={style.project_block}></div>
            <div className={style.project_block}>
              <button className={style.button_add_skill} type="submit">
                Envoyer
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

SkillAdmin.propTypes = {
  HandleSkillsModal: PropTypes.func.isRequired,
  setSelectedSkills: PropTypes.func.isRequired,
  HandleDeleteSkillsModal: PropTypes.func.isRequired,
  projects: PropTypes.array.isRequired,
  skills: PropTypes.array,
};
SkillAdmin.defaultProps = {
  HandleSkillsModal: () => {
    "toto";
  },
  setSelectedSkills: () => {
    "toto";
  },
  HandleDeleteSkillsModal: () => {
    "toto";
  },
  projects: [],
  skills: [],
};
export default SkillAdmin;
