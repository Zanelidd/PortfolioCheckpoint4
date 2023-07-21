import { useReducer, useState } from "react";
import style from "./styles/AddProject.module.css";
import PropTypes from "prop-types";
import axios from "axios";
import AsyncSelect from "react-select/async";

const AddProject = ({ HandleAddModal, skills }) => {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const customStyles = {
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: "#bdbdbd",
      };
    },
    control: (base) => ({
      ...base,
      boxShadow: "10px 5px 10px rgb(186, 186, 186);",
      borderRadius: "10px",
      width: "20vw",
      minWidth: "25vw",
      heigth: " 1.5rem",
    }),

    options: (base) => ({
      ...base,
      backgroundColor: "white",
      border: "1px #bdbdbd solid",
      boxShadow: "10px 5px 10px rgb(186, 186, 186); ",
      borderRadius: "10px",
    }),
  };

  const filterSkills = (inputValue) => {
    return skills.filter((skill) =>
      skill.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadOptionSkills = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterSkills(inputValue));
    }, 500);
  };

  const onChangeSkills = (inputValue) => {
    setSelectedSkills(inputValue);
  };

  function reducer(state, action) {
    switch (action.type) {
      case "update_input":
        return {
          ...state,
          [action.key]: action.value,
        };
      default:
        return state;
    }
  }
  const initialState = {
    title: "",
    description: "",
    img: "",
    url: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (state) => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/projects`, state)
      .then((response) => {
        if (response.status === 201) {
          selectedSkills.map((selectedSkill) => {
            axios.post(
              `${import.meta.env.VITE_BACKEND_URL}/project/${
                response.data[0].insertId
              }/skills`,
              {
                projectId: response.data[0].insertId,
                skillId: selectedSkill.id,
              }
            );
          });
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className={style.add_container}>
      <img
        className={style.exit}
        src="/src/assets/traverser.png"
        alt="exit"
        onClick={HandleAddModal}
      />
      <h3>Ajouter un projet</h3>
      <label htmlFor="Title">
        <input
          placeholder=" Nom"
          type="text"
          id="Title"
          value={state.title}
          onChange={(e) => {
            dispatch({
              type: "update_input",
              value: e.target.value,
              key: "title",
            });
          }}
        />
      </label>
      <label htmlFor="description">
        <textarea
        className={style.admin_textarea}
          placeholder="Decription"
          type="text"
          id="description"
          value={state.description}
          onChange={(e) => {
            dispatch({
              type: "update_input",
              value: e.target.value,
              key: "description",
            });
          }}
        />
      </label>
      <label htmlFor="img">
        <input
          type="file"
          id="img"
          value={state.img}
          onChange={(e) => {
            dispatch({
              type: "update_input",
              value: e.target.value,
              key: "img",
            });
          }}
        />
      </label>
      <label htmlFor="url">
        <input
          placeholder="url"
          type="text"
          id="url"
          value={state.url}
          onChange={(e) => {
            dispatch({
              type: "update_input",
              value: e.target.value,
              key: "url",
            });
          }}
        />
      </label>
      <label htmlFor="technologie">
        Skills
        <AsyncSelect
          id="technologie"
          styles={customStyles}
          cacheOptions
          defaultOptions={skills}
          loadOptions={loadOptionSkills}
          isMulti
          onChange={onChangeSkills}
        />
      </label>
      <div className={style.button_container}>
        <button
          className={style.send_add_button}
          type="button"
          onClick={() => {
            handleSubmit(state), HandleAddModal();
          }}
        >
          Envoyer
        </button>
      </div>
    </div>
  );
};

AddProject.propTypes = {
  HandleAddModal: PropTypes.func.isRequired,
  skills: PropTypes.array.isRequired,
};
export default AddProject;
