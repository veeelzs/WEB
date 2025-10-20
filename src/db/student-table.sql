-- Active: 1757427728965@@127.0.0.1@3306

DROP TABLE student;
CREATE TABLE student(  
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    firstName TEXT,
    lastName TEXT,
    middleName TEXT,
    groupId INTEGER,
    FOREIGN KEY (groupId) REFERENCES class(id)
);

ALTER TABLE student ADD uuid [text];

DELETE FROM student;