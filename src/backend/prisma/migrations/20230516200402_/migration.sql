/*
  Warnings:

  - You are about to drop the column `tags` on the `post` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "media" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "idUser" INTEGER,
    CONSTRAINT "post_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_post" ("description", "id", "idUser", "media") SELECT "description", "id", "idUser", "media" FROM "post";
DROP TABLE "post";
ALTER TABLE "new_post" RENAME TO "post";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
