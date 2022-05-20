/*
  Warnings:

  - You are about to drop the `envelopes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "envelopes";

-- CreateTable
CREATE TABLE "Envelope" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "budget" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Envelope_pkey" PRIMARY KEY ("id")
);
