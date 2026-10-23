-- CreateTable
CREATE TABLE `leads` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `formType` VARCHAR(50) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(254) NOT NULL,
    `phone` VARCHAR(40) NOT NULL,
    `projectType` VARCHAR(50) NOT NULL,
    `location` VARCHAR(150) NOT NULL,
    `message` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `leads_formType_createdAt_idx`(`formType`, `createdAt`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

