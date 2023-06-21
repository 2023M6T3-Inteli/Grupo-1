-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "mobileNumber" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "job" TEXT NOT NULL,
    "isManager" BOOLEAN,
    "idManager" INTEGER,
    "rankPoints" INTEGER NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post" (
    "id" SERIAL NOT NULL,
    "media" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "idUser" INTEGER,

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comments" (
    "id" SERIAL NOT NULL,
    "idPost" INTEGER NOT NULL,
    "idUser" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "postLike" (
    "idPost" INTEGER NOT NULL,
    "idUser" INTEGER NOT NULL,

    CONSTRAINT "postLike_pkey" PRIMARY KEY ("idUser","idPost")
);

-- CreateTable
CREATE TABLE "complaint" (
    "id" SERIAL NOT NULL,
    "reason" TEXT NOT NULL,

    CONSTRAINT "complaint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "postComplaint" (
    "idPost" INTEGER NOT NULL,
    "idUser" INTEGER NOT NULL,
    "idComplaint" INTEGER NOT NULL,

    CONSTRAINT "postComplaint_pkey" PRIMARY KEY ("idUser","idPost")
);

-- CreateTable
CREATE TABLE "notifications" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "idUser" INTEGER,
    "newNotification" BOOLEAN NOT NULL,

    CONSTRAINT "notifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "aplicationDeadLine" TIMESTAMP(3) NOT NULL,
    "duration" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "dateStart" TIMESTAMP(3) NOT NULL,
    "isApproved" BOOLEAN,
    "idUser" INTEGER,
    "idManager" INTEGER,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userApplyProject" (
    "idProject" INTEGER NOT NULL,
    "idUser" INTEGER NOT NULL,
    "idRole" INTEGER NOT NULL,

    CONSTRAINT "userApplyProject_pkey" PRIMARY KEY ("idUser","idProject","idRole")
);

-- CreateTable
CREATE TABLE "role" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projectRole" (
    "idRole" INTEGER NOT NULL,
    "idProject" INTEGER NOT NULL,

    CONSTRAINT "projectRole_pkey" PRIMARY KEY ("idRole","idProject")
);

-- CreateTable
CREATE TABLE "saveProject" (
    "idProject" INTEGER NOT NULL,
    "idUser" INTEGER NOT NULL,

    CONSTRAINT "saveProject_pkey" PRIMARY KEY ("idUser","idProject")
);

-- CreateTable
CREATE TABLE "tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userSkills" (
    "idUser" INTEGER NOT NULL,
    "idTag" INTEGER NOT NULL,

    CONSTRAINT "userSkills_pkey" PRIMARY KEY ("idUser","idTag")
);

-- CreateTable
CREATE TABLE "postTag" (
    "idPost" INTEGER NOT NULL,
    "idTag" INTEGER NOT NULL,

    CONSTRAINT "postTag_pkey" PRIMARY KEY ("idPost","idTag")
);

-- CreateTable
CREATE TABLE "projectTag" (
    "idProject" INTEGER NOT NULL,
    "idTag" INTEGER NOT NULL,

    CONSTRAINT "projectTag_pkey" PRIMARY KEY ("idProject","idTag")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_mobileNumber_key" ON "user"("mobileNumber");

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_idPost_fkey" FOREIGN KEY ("idPost") REFERENCES "post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postLike" ADD CONSTRAINT "postLike_idPost_fkey" FOREIGN KEY ("idPost") REFERENCES "post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postLike" ADD CONSTRAINT "postLike_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postComplaint" ADD CONSTRAINT "postComplaint_idPost_fkey" FOREIGN KEY ("idPost") REFERENCES "post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postComplaint" ADD CONSTRAINT "postComplaint_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postComplaint" ADD CONSTRAINT "postComplaint_idComplaint_fkey" FOREIGN KEY ("idComplaint") REFERENCES "complaint"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project" ADD CONSTRAINT "project_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userApplyProject" ADD CONSTRAINT "userApplyProject_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userApplyProject" ADD CONSTRAINT "userApplyProject_idProject_fkey" FOREIGN KEY ("idProject") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userApplyProject" ADD CONSTRAINT "userApplyProject_idRole_fkey" FOREIGN KEY ("idRole") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projectRole" ADD CONSTRAINT "projectRole_idRole_fkey" FOREIGN KEY ("idRole") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projectRole" ADD CONSTRAINT "projectRole_idProject_fkey" FOREIGN KEY ("idProject") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saveProject" ADD CONSTRAINT "saveProject_idProject_fkey" FOREIGN KEY ("idProject") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saveProject" ADD CONSTRAINT "saveProject_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userSkills" ADD CONSTRAINT "userSkills_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userSkills" ADD CONSTRAINT "userSkills_idTag_fkey" FOREIGN KEY ("idTag") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postTag" ADD CONSTRAINT "postTag_idPost_fkey" FOREIGN KEY ("idPost") REFERENCES "post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postTag" ADD CONSTRAINT "postTag_idTag_fkey" FOREIGN KEY ("idTag") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projectTag" ADD CONSTRAINT "projectTag_idProject_fkey" FOREIGN KEY ("idProject") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projectTag" ADD CONSTRAINT "projectTag_idTag_fkey" FOREIGN KEY ("idTag") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
