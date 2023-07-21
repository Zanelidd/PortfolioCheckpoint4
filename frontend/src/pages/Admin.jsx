import { useEffect, useState } from "react";
import axios from "axios";
import DeleteModal from "../components/deleteModal";
import AddProject from "../components/AddProject";
import ModifyProject from "../components/ModifyProject";
import ModifySkills from "../components/ModifySkills";
import ProjectAdmin from "../components/ProjectAdmin";
import SkillAdmin from "../components/SkillAdmin";
import style from "./styles/Admin.module.css";
import DeleteSkills from "../components/DeleteSkills";

const Admin = () => {
  const [projects, setProjects] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [modifyModal, setModifyModal] = useState(false);
  const [selectProject, setSelectProject] = useState([]);
  const [skillModify, setSkillModify] = useState(false);
  const [skillDelete, setSkillDelete] = useState(false);
  const [selectedSkills,setSelectedSkills]= useState([]);

  const [skills, setSkills] = useState();

  useEffect(() => { 
     
    
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/projects`)
      .then((response) => {
        setProjects(response.data);
      });
  }, [selectProject, deleteModal, addModal, modifyModal]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/skills`).then((response) => {
      setSkills(response.data);
    });
  }, []);

  const HandleDeleteModal = () => {
    setDeleteModal(!deleteModal);
  };

  const HandleAddModal = () => {
    setAddModal(!addModal);
  };
  const HandleModifyModal = () => {
    setModifyModal(!modifyModal);
  };

  const HandleSkillsModal = () => {
    setSkillModify(!skillModify);
  };
  const HandleDeleteSkillsModal = () => {
    setSkillDelete(!skillDelete);
  };
console.log(projects);
  return (
    <>
      <h1>Administration</h1>
      <div className={style.admin_container}>
        <ProjectAdmin
          projects={projects}
          HandleDeleteModal={HandleDeleteModal}
          HandleAddModal={HandleAddModal}
          HandleModifyModal={HandleModifyModal}
          skills={skills}
          setSelectProject={setSelectProject}
        />

        <SkillAdmin
          skills={skills}
          HandleSkillsModal={HandleSkillsModal}
          setSelectedSkills={setSelectedSkills}
          HandleDeleteSkillsModal={HandleDeleteSkillsModal}
        />

        {deleteModal && (
          <DeleteModal
            selectProject={selectProject}
            HandleDeleteModal={HandleDeleteModal}
          />
        )}

        {addModal && (
          <AddProject HandleAddModal={HandleAddModal} skills={skills} />
        )}

        {modifyModal && (
          <ModifyProject
            selectProject={selectProject}
            HandleModifyModal={HandleModifyModal}
          />
        )}

        {skillModify && <ModifySkills HandleSkillsModal={HandleSkillsModal} selectedSkills={selectedSkills} />}
        {skillDelete && (
          <DeleteSkills
            skillDelete={skillDelete}
            selectedSkills={selectedSkills}
            HandleDeleteSkillsModal={HandleDeleteSkillsModal}
          />
        )}
      </div>
    </>
  );
};

export default Admin;
