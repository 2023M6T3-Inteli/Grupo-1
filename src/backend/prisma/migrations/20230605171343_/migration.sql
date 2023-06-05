/*
  Warnings:

  - Added the required column `newNotification` to the `notifications` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_notifications" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "idUser" INTEGER,
    "newNotification" BOOLEAN NOT NULL,
    CONSTRAINT "notifications_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_notifications" ("description", "id", "idUser", "name") SELECT "description", "id", "idUser", "name" FROM "notifications";
DROP TABLE "notifications";
ALTER TABLE "new_notifications" RENAME TO "notifications";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
