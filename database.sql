
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