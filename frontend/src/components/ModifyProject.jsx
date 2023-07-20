import axios from "axios";
import PropTypes from "prop-types";
import style from "./styles/AddProject.module.css";
import { useReducer } from "react";

const ModifyProject = ({ selectProject,HandleModifyModal}) => {
  function reducer(modify, action) {
    switch (action.type) {
      case "update_modify":
        return {
          ...modify,
          [action.key]: action.value,
        };
      default:
        return modify;
    }
  }
  const initialState = {
    title: selectProject.title,
    description: selectProject.description,
    img: selectProject.img,
    technologie: selectProject.technologie,
  };

  const [modify, dispatch] = useReducer(reducer, initialState);

  const handleModifySubmit = (selectProject) => {
    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/projects/${selectProject.id}`,
        modify
      )
      .catch((err) => console.error(err));
  };


  return (
    <div className={style.add_container}>
          <img className={style.exit} src="/src/assets/traverser.png" alt="exit" onClick={HandleModifyModal}  />
      <h3>Modifier le projet</h3>
      <label htmlFor="Title">
        <input
          type="text"
          id="Title"
          value={modify.title}
          onChange={(e) => {
            dispatch({
              type: "update_modify",
              value: e.target.value,
              key: "title",
            });
          }}
        />
      </label>
      <label htmlFor="description">
        <textarea
          type="text"
          id="description"
          value={modify.description}
          onChange={(e) => {
            dispatch({
              type: "update_modify",
              value: e.target.value,
              key: "description",
            });
          }}
        />
      </label>
      <label htmlFor="img">
        Image
        <input
          type="text"
          id="img"
          value={modify.img}
          onChange={(e) => {
            dispatch({
              type: "update_modify",
              value: e.target.value,
              key: "img",
            });
          }}
        />
      </label>
      {/* <label htmlFor="technologie">
        Technologies utilisées
        <input
          type="text"
          id="technologie"
          value={modify.technologie}
          onChange={(e) => {
            dispatch({
              type: "update_modify",
              value: e.target.value,
              key: "technologie",
            });
          }}
        />
      </label> */}
      <div className={style.button_container}>
        <button
          type="button"
          onClick={() => {
            handleModifySubmit(selectProject),
            HandleModifyModal();
          }}
        >
          Envoyer
        </button>
      </div>
    </div>
  );
};

ModifyProject.propTypes = {
  selectProject: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    technologie: PropTypes.string.isRequired,
  }).isRequired,
  HandleModifyModal:PropTypes.func.isRequired,
};

export default ModifyProject;
