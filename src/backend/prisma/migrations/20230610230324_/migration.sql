-- CreateTable
CREATE TABLE "user" (
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

-- CreateTable
CREATE TABLE "post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "media" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "idUser" INTEGER,
    CONSTRAINT "post_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "comments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idPost" INTEGER NOT NULL,
    "idUser" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    CONSTRAINT "comments_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "comments_idPost_fkey" FOREIGN KEY ("idPost") REFERENCES "post" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "postLike" (
    "idPost" INTEGER NOT NULL,
    "idUser" INTEGER NOT NULL,

    PRIMARY KEY ("idUser", "idPost"),
    CONSTRAINT "postLike_idPost_fkey" FOREIGN KEY ("idPost") REFERENCES "post" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "postLike_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "complaint" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "reason" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "postComplaint" (
    "idPost" INTEGER NOT NULL,
    "idUser" INTEGER NOT NULL,
    "idComplaint" INTEGER NOT NULL,

    PRIMARY KEY ("idUser", "idPost"),
    CONSTRAINT "postComplaint_idPost_fkey" FOREIGN KEY ("idPost") REFERENCES "post" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "postComplaint_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "postComplaint_idComplaint_fkey" FOREIGN KEY ("idComplaint") REFERENCES "complaint" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "notifications" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "idUser" INTEGER,
    "newNotification" BOOLEAN NOT NULL,
    CONSTRAINT "notifications_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "aplicationDeadLine" DATETIME NOT NULL,
    "duration" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "dateStart" DATETIME NOT NULL,
    "isApproved" BOOLEAN,
    "idUser" INTEGER,
    "idManager" INTEGER,
    CONSTRAINT "project_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "userApplyProject" (
    "idProject" INTEGER NOT NULL,
    "idUser" INTEGER NOT NULL,
    "idRole" INTEGER NOT NULL,

    PRIMARY KEY ("idUser", "idProject", "idRole"),
    CONSTRAINT "userApplyProject_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "userApplyProject_idProject_fkey" FOREIGN KEY ("idProject") REFERENCES "project" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "userApplyProject_idRole_fkey" FOREIGN KEY ("idRole") REFERENCES "role" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "role" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "projectRole" (
    "idRole" INTEGER NOT NULL,
    "idProject" INTEGER NOT NULL,

    PRIMARY KEY ("idRole", "idProject"),
    CONSTRAINT "projectRole_idRole_fkey" FOREIGN KEY ("idRole") REFERENCES "role" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "projectRole_idProject_fkey" FOREIGN KEY ("idProject") REFERENCES "project" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "saveProject" (
    "idProject" INTEGER NOT NULL,
    "idUser" INTEGER NOT NULL,

    PRIMARY KEY ("idUser", "idProject"),
    CONSTRAINT "saveProject_idProject_fkey" FOREIGN KEY ("idProject") REFERENCES "project" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "saveProject_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "tag" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "userSkills" (
    "idUser" INTEGER NOT NULL,
    "idTag" INTEGER NOT NULL,

    PRIMARY KEY ("idUser", "idTag"),
    CONSTRAINT "userSkills_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "userSkills_idTag_fkey" FOREIGN KEY ("idTag") REFERENCES "tag" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "postTag" (
    "idPost" INTEGER NOT NULL,
    "idTag" INTEGER NOT NULL,

    PRIMARY KEY ("idPost", "idTag"),
    CONSTRAINT "postTag_idPost_fkey" FOREIGN KEY ("idPost") REFERENCES "post" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "postTag_idTag_fkey" FOREIGN KEY ("idTag") REFERENCES "tag" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "projectTag" (
    "idProject" INTEGER NOT NULL,
    "idTag" INTEGER NOT NULL,

    PRIMARY KEY ("idProject", "idTag"),
    CONSTRAINT "projectTag_idProject_fkey" FOREIGN KEY ("idProject") REFERENCES "project" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "projectTag_idTag_fkey" FOREIGN KEY ("idTag") REFERENCES "tag" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_mobileNumber_key" ON "user"("mobileNumber");
