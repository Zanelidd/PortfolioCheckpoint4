const AbstractManager = require("./AbstractManager");

class ProjectsManager extends AbstractManager {
  constructor() {
    super({ table: "projects" });
  }

  findAllWithSkills(projectId) {
    return this.database.query(
      `select * from  ${this.table}
    INNER JOIN projects_skills AS ps ON ${this.table}.id = ps.project_id
    INNER JOIN skills AS s ON s.id= ps.skills_id 
    WHERE ${this.table}.id =?`,
      [projectId]
    );
  }

  insert(project) {
    return this.database.query(
      `insert into ${this.table} (title, description, img) values (?,?,?)`,
      [project.title, project.description, project.img]
    );
  }

  update(project) {
    return this.database.query(
      `update ${this.table} set title = ?, description = ?, img = ?, url=? where id = ?`,
      [project.title, project.description, project.img,project.url, project.id]
    );
  }
}

module.exports = ProjectsManager;
