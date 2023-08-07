/*
  Warnings:

  - You are about to alter the column `nohp` on the `profile` table. The data in that column could be lost. The data in that column will be cast from `SmallInt` to `VarChar(25)`.

*/
-- AlterTable
ALTER TABLE `profile` MODIFY `nohp` VARCHAR(25) NULL;
