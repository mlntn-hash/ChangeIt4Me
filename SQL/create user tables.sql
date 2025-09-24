---USER STUFF
-- Emails
CREATE TABLE "c4m_Email" (
	"email" TEXT PRIMARY KEY,
	"subscribed" BOOLEAN NOT NULL DEFAULT FALSE,

	CHECK ("email" LIKE '%@%' AND char_length("email") <= 255)

);


-- Users
CREATE TABLE "c4m_Users" (

	-- Main account data
    "user_id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_email" TEXT UNIQUE NOT NULL REFERENCES "c4m_Email"("email") ON DELETE CASCADE,
    "password_hash" TEXT NULL,

	-- For Google/Apple auth
	"auth_provider" TEXT NULL CHECK ("auth_provider" IN ('local', 'google', 'apple')) DEFAULT 'local',
    "provider_user_id" TEXT NULL,

	-- Account status
    "active_status" TEXT NOT NULL CHECK ("active_status" IN ('unconfirmed', 'active', 'banned', 'deleted')) DEFAULT 'unconfirmed', 
	"created_time" TIMESTAMP DEFAULT NOW(), -- When account created


    --CHECK (char_length("password_hash") >= 60), -- assuming bcrypt hash
	CHECK ("user_email" LIKE '%@%' AND char_length("user_email") <= 255),
	CHECK (
        ("auth_provider" = 'local' AND "password_hash" IS NOT NULL)
        OR
        ("auth_provider" IN ('google', 'apple') AND "provider_user_id" IS NOT NULL)
    )
);



-- User Bios
CREATE TABLE "c4m_User_Bios" (
	"user_bio_id" INT PRIMARY KEY REFERENCES "c4m_Users"("user_id") ON DELETE CASCADE,
	"name" TEXT NOT NULL,
	"short_bio" TEXT NULL,
	"avatar_url" TEXT NULL,
	"location" TEXT NULL,
	"phone" TEXT NULL,

	CHECK (char_length("name") >= 3 AND char_length("name") <= 100), -- Name is between 3 and 100 characters. 
	CHECK (char_length("phone") <= 15), -- Store without spaces and special characters.
	CHECK (char_length("short_bio") <= 100)
);

-- Roles
CREATE TABLE "c4m_Roles" (
    "role_id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT UNIQUE NOT NULL
);


-- User ↔ Role mapping
CREATE TABLE "c4m_User_Roles" (
    "user_id" INTEGER REFERENCES "c4m_Users" ON DELETE CASCADE,
    "role_id" INTEGER REFERENCES "c4m_Roles" ON DELETE CASCADE,
    PRIMARY KEY ("user_id", "role_id")
);

