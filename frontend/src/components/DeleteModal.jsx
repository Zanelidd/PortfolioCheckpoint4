import axios from "axios";
import PropTypes from "prop-types";
import style from "./styles/DeleteModal.module.css";

const DeleteModal = ({ selectProject,HandleDeleteModal }) => {
  const HandleDelete = () => {
    axios.delete(`${import.meta.env.VITE_BACKEND_URL}/projects/${selectProject.id}`);
    HandleDeleteModal();
  };

  return (
    <div className={style.delete_modal}>
      <h2>Etes-vous sûr de vouloir supprimer ce projet ?</h2>
      <button type="button" onClick={HandleDelete}>
        Oui
      </button>
      <button type="button" onClick={HandleDeleteModal}>Non</button>
    </div>
  );
};

DeleteModal.propTypes = {
  selectProject: PropTypes.shape({
        id: PropTypes.number.isRequired,
    }).isRequired,
    HandleDeleteModal :PropTypes.func.isRequired
  };

export default DeleteModal;
