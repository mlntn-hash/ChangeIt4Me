CREATE TABLE "c4m_Posts" (
	"post_id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"user_id" INT NOT NULL REFERENCES "c4m_Users",

	"title" TEXT NOT NULL,
	-- Still don't know if should be NULL or NOT NULL
	"description" TEXT NOT NULL DEFAULT '',

	"country" TEXT NOT NULL,
	"region" TEXT NOT NULL,
	"locality" TEXT NOT NULL,

	"name" TEXT NOT NULL,
	"phone" TEXT NOT NULL,
	"email" TEXT NOT NULL,
	"contact_method" TEXT NOT NULL,

	"status" TEXT NOT NULL, -- TODO: ADD MORE TO STATUS like pending review, disabled, active, rejected. Or make separate table.
	"last_update" TIMESTAMP DEFAULT NOW(), -- When account created
	
	CHECK (char_length("title") <= 60),
	CHECK (char_length("description") <= 400),
	
	CHECK (char_length("country") <= 60),
	CHECK (char_length("region") <= 40),
	CHECK (char_length("locality") <= 120),
	
	CHECK (char_length("name") >= 3 AND char_length("name") <= 100), -- Name is between 3 and 100 characters. 
	CHECK (char_length("phone") <= 15), -- Store without spaces and special characters.
	CHECK ("email" LIKE '%@%' AND char_length("email") <= 255)
	-- TODO: add contact_method CHECK
)

CREATE TABLE "c4m_PostPhotos" (
	"photo_id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	
	"post_id" INT NOT NULL REFERENCES "c4m_Posts" ON DELETE CASCADE,
	"photo_url" TEXT NOT NULL,

	CHECK (char_length("photo_url") >= 255);

----------------------------------CAR----------------------------------------

CREATE TABLE "c4m_CarPost"(
	"carpost_id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"post_id" INT NOT NULL REFERENCES "c4m_Posts" ON DELETE CASCADE,

	-- Number Values
	"doors" INT NULL, 
	"mileage" INT NULL, 
	"horsepower" INT NULL,
	"engine_size" INT NULL,

	-- Table Values
	"make" INT NULL REFERENCES "c4m_CarPost_Make",
	"model" INT NULL REFERENCES "c4m_CarPost_Model",
	"color" INT NULL REFERENCES "c4m_CarPost_Color",
	
	"body_type" INT NULL REFERENCES "c4m_CarPost_BodyType",
	"fuel_type" INT NULL REFERENCES "c4m_CarPost_FuelType",
	"engine_type" INT NULL REFERENCES "c4m_CarPost_EngineType",
	"drive_type" INT NULL REFERENCES "c4m_CarPost_DriveType",
	"condition" INT NULL REFERENCES "c4m_CarPost_Condition",
	"transmission" INT NULL REFERENCES "c4m_CarPost_Transmission",
	
	
	"vin" TEXT NULL,
	
	"ownership_history" TEXT NULL, -- wtf is this supposed to be
	"accident_history" TEXT NULL, -- i have no idea what this is going to look like
	"service_history" TEXT NULL, -- hard this is
	
	CHECK (char_length("vin") <= 17)
	CHECK (char_length("accident_history") <= 100)
	CHECK (char_length("ownership_history") <= 100)
	CHECK (char_length("service_history") <= 100)
)

-- Tables for dropdown lists.

CREATE TABLE "c4m_CarPost_Make"(
	"make_id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"make" TEXT NOT NULL UNIQUE,
	CHECK (char_length("make") >= 24)
)

CREATE TABLE "c4m_CarPost_Model"(
	"model_id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"model" TEXT NOT NULL UNIQUE,
	CHECK (char_length("model") >= 24)
)

CREATE TABLE "c4m_CarPost_Color"(
	"color_id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"color" TEXT NOT NULL UNIQUE,
	CHECK (char_length("color") >= 24)
)

CREATE TABLE "c4m_CarPost_BodyType"(
	"bodytype_id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"bodytype" TEXT NOT NULL UNIQUE,
	CHECK (char_length("bodytype") >= 24)
)

CREATE TABLE "c4m_CarPost_FuelType"(
	"fueltype_id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"fueltype" TEXT NOT NULL UNIQUE,
	CHECK (char_length("fueltype") >= 24)
)

CREATE TABLE "c4m_CarPost_EngineType"(
	"enginetype_id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"enginetype" TEXT NOT NULL UNIQUE,
	CHECK (char_length("enginetype") >= 24)
)

CREATE TABLE "c4m_CarPost_DriveType"(
	"drivetype_id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"drivetype" TEXT NOT NULL UNIQUE,
	CHECK (char_length("drivetype") >= 24)
)

CREATE TABLE "c4m_CarPost_Condition"(
	"condition_id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"condition" TEXT NOT NULL UNIQUE,
	CHECK (char_length("condition") >= 24)
)

CREATE TABLE "c4m_CarPost_Transmission"(
	"transmission_id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"transmission" TEXT NOT NULL UNIQUE,
	CHECK (char_length("transmission") >= 24)
)