import { useRef, useState } from "react";
import style from "./styles/AddProject.module.css";
import PropTypes from "prop-types";
import axios from "axios";

const ModifySkills = ({ HandleSkillsModal }) => {
//   const [skillName, setSkillName] = useState({
//     label : ,
//     value : ,
//   });

  const inputRef = useRef();

  const HandleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", inputRef.current.files[0]);
    console.log(inputRef.current.files[0]);
    HandleSkillsModal();
  };
  //   const handleModifySubmit = (selectProject) => {
  //     axios
  //       .put(
  //         `${import.meta.env.VITE_BACKEND_URL}/projects/${selectProject.id}`,
  //         modify
  //       )
  //       .catch((err) => console.error(err));
  //   };

  return (
    <form id="myForm" name="myForm" onSubmit={HandleSubmit}>
      <div className={style.add_container}>
        <img
          className={style.exit}
          src="/public/assets/traverser.png"
          alt="exit"
          onClick={HandleSkillsModal}
        />
        <h3>Modifier un skill</h3>
        <label htmlFor="Title">
          Nom
          <input
            type="text"
            id="Title"
            onChange={(e) => {
              setSkillName(e.target.value);
            }}
          />
        </label>
        <label htmlFor="img">
          Image
          <input type="file" id="img" ref={inputRef} />
        </label>

        <div className={style.button_container}>
          <button type="submit">Envoyer</button>
        </div>
      </div>
    </form>
  );
};

ModifySkills.propTypes = {
  HandleSkillsModal: PropTypes.func.isRequired,
  skills: PropTypes.array.isRequired,
};

export default ModifySkills;
