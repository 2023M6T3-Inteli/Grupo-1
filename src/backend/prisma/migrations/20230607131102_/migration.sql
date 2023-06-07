-- CreateTable
CREATE TABLE "userSkills" (
    "idUser" INTEGER NOT NULL,
    "idTag" INTEGER NOT NULL,

    PRIMARY KEY ("idUser", "idTag"),
    CONSTRAINT "userSkills_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "userSkills_idTag_fkey" FOREIGN KEY ("idTag") REFERENCES "tag" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
