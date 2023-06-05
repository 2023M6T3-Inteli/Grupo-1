/*
  Warnings:

  - You are about to drop the column `name` on the `notifications` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_notifications" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "idUser" INTEGER,
    "newNotification" BOOLEAN NOT NULL,
    CONSTRAINT "notifications_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_notifications" ("description", "id", "idUser", "newNotification") SELECT "description", "id", "idUser", "newNotification" FROM "notifications";
DROP TABLE "notifications";
ALTER TABLE "new_notifications" RENAME TO "notifications";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
