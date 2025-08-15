/*
  Warnings:

  - You are about to drop the column `seviceDate` on the `ServiceRecord` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."ServiceRecord" DROP COLUMN "seviceDate",
ADD COLUMN     "serviceDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
