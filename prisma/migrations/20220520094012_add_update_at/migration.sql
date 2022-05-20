/*
  Warnings:

  - Added the required column `updateAt` to the `Envelope` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Envelope" ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL;
