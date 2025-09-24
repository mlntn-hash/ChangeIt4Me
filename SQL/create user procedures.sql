-- Inserts a new user with email, password, and name.
-- Returns:
--   0 = success
--   1 = email already exists
--   12 = unexpected error


CREATE OR REPLACE FUNCTION "c4m_InsertFullUser"(
    p_email TEXT,
    p_password_hash TEXT,
    p_name TEXT
)
RETURNS INT
AS $$
DECLARE
    v_user_id INT;
BEGIN

	IF EXISTS (
        SELECT 1 FROM "c4m_Email" WHERE "email" = p_email
    ) THEN
        RETURN 1; -- Email already in use
    END IF;

    -- Insert into c4m_Email
    INSERT INTO "c4m_Email" ("email")
    VALUES (p_email);

    -- Insert into c4m_Users
    INSERT INTO "c4m_Users" ("user_email", "password_hash", "auth_provider")
    VALUES (p_email, p_password_hash, 'local')
    RETURNING "user_id" INTO v_user_id;

    -- Insert into c4m_User_Bios
    INSERT INTO "c4m_User_Bios" ("user_bio_id", "name")
    VALUES (v_user_id, p_name);

	RETURN 0; -- Success
	
EXCEPTION
    WHEN others THEN
		RAISE NOTICE 'Unexpected error: %', SQLERRM;
    	RETURN 12;
END;
$$
LANGUAGE plpgsql;


-- Updates a user bio
-- Returns:
--   0 = success
--   4 = user not found
--   12 = unexpected error

CREATE OR REPLACE FUNCTION "c4m_UpdateUserBio"(
    p_user_id INT,
    p_name TEXT,
    p_short_bio TEXT,
    p_avatar_url TEXT,
    p_country TEXT,
	p_region TEXT,
	p_locality TEXT,
    p_phone TEXT
)
RETURNS INT
AS $$
BEGIN

    -- Check if user bio exists
    IF NOT EXISTS (
        SELECT 1 FROM "c4m_User_Bios" WHERE "user_bio_id" = p_user_id
    ) THEN
        RETURN 4; -- User bio not found
    END IF;

    -- Update bio
    UPDATE "c4m_User_Bios"
    SET
        "name" = COALESCE(NULLIF(p_name, ''), "name"),
        "short_bio" = COALESCE(NULLIF(p_short_bio, ''), "short_bio"),
        "avatar_url" = COALESCE(NULLIF(p_avatar_url, ''), "avatar_url"),
        "country" = COALESCE(NULLIF(p_country, ''), "country"),
		"region" = COALESCE(NULLIF(p_region, ''), "region"),
		"locality" = COALESCE(NULLIF(p_locality, ''), "locality"),
        "phone" = COALESCE(NULLIF(p_phone, ''), "phone")
    WHERE "user_bio_id" = p_user_id;

    RETURN 0; -- Success
	
EXCEPTION
    WHEN others THEN
		RAISE NOTICE 'Unexpected error: %', SQLERRM;
        RETURN 12; -- Unexpected error
END;
$$
LANGUAGE plpgsql;









