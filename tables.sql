-- Active: 1658624429287@@35.226.146.116@3306@silveira-21814745-luiz-azevedo
CREATE TABLE buyers_200systems(
person_code INT PRIMARY KEY AUTO_INCREMENT,
person_name VARCHAR(255) NOT NULL,
indication_code VARCHAR(255) NOT NULL,
points INT NOT NULL,
);

CREATE TABLE purchases_200systems(
id INT PRIMARY KEY AUTO_INCREMENT,
person_code VARCHAR(255) NOT NULL,
product_name VARCHAR(255) NOT NULL,
dtBuy DATE NOT NULL,
indication_code? VARCHAR(255) NOT NULL,
FOREIGN KEY (person_code) REFERENCES buyers_200systems(person_code),
FOREIGN KEY (indication_code) REFERENCES buyers_200systems(indication_code)
);

CREATE TABLE orders_details_case2(
id INT PRIMARY KEY AUTO_INCREMENT,
pizza VARCHAR(255) NOT NULL,
quantity INT NOT NULL,
FOREIGN KEY (id) REFERENCES orders_list_case2(id)
);