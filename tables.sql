-- Active: 1658624429287@@35.226.146.116@3306@silveira-21814745-luiz-azevedo
CREATE TABLE buyers_200systems (
person_code VARCHAR(255) PRIMARY KEY,
person_name VARCHAR(255) NOT NULL,
indication_code VARCHAR(255) NULL,
points INT
);

CREATE TABLE purchase_200systems (
buyer_code VARCHAR(255) PRIMARY KEY,
person_code_indication VARCHAR(255) NULL,
product_name VARCHAR(255) NOT NULL,
dtBuy DATE NOT NULL,
indication_code VARCHAR(255) NULL,
FOREIGN KEY (buyer_code) REFERENCES buyers_200systems(person_code),
FOREIGN KEY (person_code_indication) REFERENCES buyers_200systems(person_code)
);

