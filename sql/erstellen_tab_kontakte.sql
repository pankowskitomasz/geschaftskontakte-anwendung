CREATE TABLE KONTAKTE(
    ID INT NOT NULL AUTO_INCREMENT,
    BENUTZER INT NOT NULL,
    VORNAME VARCHAR(100) NOT NULL,
    NACHNAME VARCHAR(100) NOT NULL,
    ADDRESSE VARCHAR(150) NOT NULL,
    MAILADDRESSE VARCHAR(150) NOT NULL,
    STADT VARCHAR(100) NOT NULL,
    LAND VARCHAR(100) NOT NULL,
    TELEFON1 VARCHAR(20) NOT NULL,
    TELEFON2 VARCHAR(20) NOT NULL,
    IDNR VARCHAR(11) NOT NULL,
    PRIMARY KEY(ID)
);