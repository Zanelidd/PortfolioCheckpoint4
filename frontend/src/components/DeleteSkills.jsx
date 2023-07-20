import axios from "axios";
import PropTypes from "prop-types";
import style from "./styles/DeleteModal.module.css";

const DeleteSkills = ({ HandleDeleteSkillsModal, selectedSkills }) => {
  const HandleDelete = () => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/skills/${selectedSkills.id}`)
      .catch((err) => console.error(err));
    HandleDeleteSkillsModal();
  };
  console.log(selectedSkills.id);

  return (
    <div className={style.delete_modal}>
      <h2>Etes-vous sûr de vouloir supprimer ce projet ?</h2>
      <button type="button" onClick={HandleDelete}>
        Oui
      </button>
      <button type="button" onClick={HandleDeleteSkillsModal}>
        Non
      </button>
    </div>
  );
};

DeleteSkills.propTypes = {
  selectedSkills: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  HandleDeleteSkillsModal: PropTypes.func.isRequired,
};

export default DeleteSkills;
