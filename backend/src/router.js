const express = require("express");
const multer = require("multer");

const router = express.Router();
const upload = multer({ dest: "./public/upload/" });

const uploadFile = require("./services/uploadFile");
const projectsControllers = require("./controllers/projectsControllers");
const skillsControllers = require("./controllers/skillsControllers");

const { verifyPassword } = require("./services/checkAuth");

// router.post("/login", usersControllers.getUserByEmail, verifyPassword);

router.get("/projects", projectsControllers.browse);


// router.get("/projects/:id", itemControllers.read);
router.put("/projects/:id", projectsControllers.edit);
router.post("/projects", projectsControllers.add);
router.delete("/projects/:id", projectsControllers.destroy);

router.get("/skills", skillsControllers.browseSkills);
router.get("/skill", skillsControllers.browse);

// router.get("/skills/:id", itemControllers.read);
router.put("/skills/:id", skillsControllers.edit);
router.post("/skills", skillsControllers.add);
router.get("/projects/:id/skills", projectsControllers.browseWithSkills);
router.post("/project/:id/skills", skillsControllers.addSkillOnProject);
router.delete("/skills/:id", skillsControllers.destroy);

router.post("/upload", upload.single("photo"), uploadFile.postFile);



module.exports = router;
