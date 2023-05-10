/*
  Warnings:

  - Added the required column `rankPoints` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "rankPoints" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "post" (
    "id" SERIAL NOT NULL,
    "media" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    "idUser" INTEGER,

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comments" (
    "idPost" INTEGER NOT NULL,
    "idUser" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("idUser","idPost")
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
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "idUser" INTEGER,

    CONSTRAINT "notifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "postTag" (
    "idPost" INTEGER NOT NULL,
    "idTag" INTEGER NOT NULL,

    CONSTRAINT "postTag_pkey" PRIMARY KEY ("idPost","idTag")
);

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
ALTER TABLE "postTag" ADD CONSTRAINT "postTag_idPost_fkey" FOREIGN KEY ("idPost") REFERENCES "post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postTag" ADD CONSTRAINT "postTag_idTag_fkey" FOREIGN KEY ("idTag") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
