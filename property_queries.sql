-- PROPERTIES TABLE

CREATE TABLE properties (
    id INT PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(500),
    location VARCHAR(100),
    rent INT,
    bedrooms INT,
    bathrooms INT,
    propertyType VARCHAR(100),
    available BOOLEAN
);


-- ADD PROPERTY

INSERT INTO properties
(id, title, description, location, rent, bedrooms, bathrooms, propertyType, available)
VALUES
(1, 'Modern 2 BHK Apartment', 'A comfortable apartment suitable for a small family.', 'Hyderabad', 18000, 2, 2, 'Apartment', TRUE);

INSERT INTO properties
(id, title, description, location, rent, bedrooms, bathrooms, propertyType, available)
VALUES
(2, 'Luxury 3 BHK Villa', 'Spacious villa with parking and garden area.', 'Bangalore', 35000, 3, 3, 'Villa', TRUE);

INSERT INTO properties
(id, title, description, location, rent, bedrooms, bathrooms, propertyType, available)
VALUES
(3, 'Budget 1 BHK Flat', 'Affordable flat close to public transportation.', 'Chennai', 12000, 1, 1, 'Apartment', FALSE);


-- FETCH ALL PROPERTIES

SELECT *
FROM properties;


-- FETCH PROPERTY BY ID

SELECT *
FROM properties
WHERE id = 1;


-- FETCH PROPERTIES BY LOCATION

SELECT *
FROM properties
WHERE location = 'Hyderabad';


-- FETCH PROPERTIES BY PROPERTY TYPE

SELECT *
FROM properties
WHERE propertyType = 'Apartment';


-- UPDATE PROPERTY

UPDATE properties
SET
    title = 'Updated 2 BHK Apartment',
    description = 'Updated property description.',
    location = 'Hyderabad',
    rent = 20000,
    bedrooms = 2,
    bathrooms = 2,
    propertyType = 'Apartment',
    available = TRUE
WHERE id = 1;


-- DELETE PROPERTY

DELETE FROM properties
WHERE id = 2;