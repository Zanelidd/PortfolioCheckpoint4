const AbstractManager = require("./AbstractManager");

class SkillsManager extends AbstractManager {
  constructor() {
    super({ table: "skills" });
  }


  findAllWhitJoinTable() {
    return this.database.query(`select * from  ${this.table}
    INNER JOIN projects_skills AS ps ON ${this.table}.id = ps.skills_id`);
  }

  findAllskills() {
    return this.database.query(
      `select * from  ${this.table}`
    );
  }

  insert(label, value) {
    return this.database.query(
      `insert into ${this.table} (label, value,  values (?,?)`,
      [label, value]
    );
  }

  insertIntoJoin(skillId, projectId) {
    return this.database.query(
      `insert into projects_skills (skills_id,project_id) values (?,?)`,
      [skillId, projectId]
    );
  }

  update(skill) {
    return this.database.query(
      `update ${this.table} set title = ?, description = ?, img = ? where id = ?`,
      [skill.title, skill.description, skill.img, skill.id]
    );
  }
}

module.exports = SkillsManager;
