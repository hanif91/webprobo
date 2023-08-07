-- DropIndex
DROP INDEX `User_email_key` ON `user`;

-- AlterTable
ALTER TABLE `user` MODIFY `email` VARCHAR(191) NULL;
