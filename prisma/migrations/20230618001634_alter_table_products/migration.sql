/*
  Warnings:

  - Added the required column `image` to the `beverage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `burger` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "beverage" ADD COLUMN     "image" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "burger" ADD COLUMN     "image" VARCHAR(255) NOT NULL;
