-- DropForeignKey
ALTER TABLE `TodoEntry` DROP FOREIGN KEY `TodoEntry_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `TodoEntry` DROP FOREIGN KEY `TodoEntry_todolistId_fkey`;

-- DropForeignKey
ALTER TABLE `Todolist` DROP FOREIGN KEY `Todolist_userId_fkey`;

-- AddForeignKey
ALTER TABLE `Todolist` ADD CONSTRAINT `Todolist_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TodoEntry` ADD CONSTRAINT `TodoEntry_todolistId_fkey` FOREIGN KEY (`todolistId`) REFERENCES `Todolist`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TodoEntry` ADD CONSTRAINT `TodoEntry_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
