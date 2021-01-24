
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "f_name" VARCHAR (50) NOT NULL,
    "l_name" VARCHAR (50) NOT NULL,
    "email" VARCHAR (50) NOT NULL,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "searchable" BOOLEAN NOT NULL
);

CREATE TABLE "brand" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(50), 
	"logo" VARCHAR(100)
);

CREATE TABLE "user_brand" (
	id SERIAL PRIMARY KEY,
	user_id INT REFERENCES "user",
	brand_id INT REFERENCES "brand"
);

CREATE TABLE "clothing" (
	id SERIAL PRIMARY KEY,
	item_name VARCHAR (100),
	item_size VARCHAR (25),
	item_note VARCHAR (200),
	brand_id INT REFERENCES "brand",
	user_id INT REFERENCES "user"
);

CREATE TABLE user_friend (
	id SERIAL PRIMARY KEY,
	user_id INT REFERENCES "user",
	friend_id INT REFERENCES "user"
);

INSERT INTO "brand" ("name", "logo")
VALUES ('American Apparel', 'https://logo.clearbit.com/americanapparel.com'), ('Zara', 'https://logo.clearbit.com/zara.com'), ('Forever 21', 'https://logo.clearbit.com/forever21.com'),
('Coach', 'https://logo.clearbit.com/coach.com'), ('Gap', 'https://logo.clearbit.com/gap.com'), ('Levi''s', 'https://logo.clearbit.com/levi.com');
