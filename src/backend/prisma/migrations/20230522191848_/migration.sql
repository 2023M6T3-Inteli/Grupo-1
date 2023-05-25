/*
  Warnings:

  - Added the required column `password` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "mobileNumber" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "job" TEXT NOT NULL,
    "isManager" BOOLEAN,
    "idManager" INTEGER,
    "rankPoints" INTEGER NOT NULL
);
INSERT INTO "new_user" ("email", "fullName", "id", "idManager", "isManager", "job", "location", "mobileNumber", "phoneNumber", "rankPoints") SELECT "email", "fullName", "id", "idManager", "isManager", "job", "location", "mobileNumber", "phoneNumber", "rankPoints" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
CREATE UNIQUE INDEX "user_mobileNumber_key" ON "user"("mobileNumber");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
