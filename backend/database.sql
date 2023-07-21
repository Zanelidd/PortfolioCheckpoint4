-- Active: 1686231917905@@127.0.0.1@3306@portfolio

CREATE TABLE
    skills(
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        label VARCHAR(80) NOT NULL,
        value VARCHAR(120) NOT NULL

    ) ENGINE = InnoDB DEFAULT CHARSET = latin1;

CREATE TABLE
    projects (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        title varchar(255) NOT NULL,
        description VARCHAR(1200) NOT NULL,
        img VARCHAR(255) NOT NULL,
        url VARCHAR(255) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = latin1;

CREATE TABLE
    user(
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        email VARCHAR(80) NOT NULL,
        password VARCHAR(80) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = latin1;

CREATE TABLE
    projects_skills (
        skills_id INT NOT NULL,
        project_id INT NOT NULL,
        FOREIGN KEY (skills_id) REFERENCES skills(id) ON DELETE CASCADE,
        FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
    ) ENGINE = InnoDB DEFAULT CHARSET = latin1;

INSERT INTO
    projects (title, description, img, url)
VALUES (
        'Quîzzz',
        'Doodads',
        'Quizzz.png',
        'https://wildcodeschool.github.io/2023-02-JS-RemoteFR-DeVMX-P1-G1/'
    );

INSERT INTO
    user (email, password)
VALUES (
        'damien_arnaud@orange.fr',
        'Totolasticot1'
    );

INSERT INTO skills (label, value)
VALUES ('HTML', 'html.png'), ('CSS', 'css.png'), (
        'Javascript',
        'Javascript.png'
    );

INSERT INTO projects_skills (skills_id, project_id)
VALUES (1,1), (2,1), (3,1);