/*
  Warnings:

  - Added the required column `userId` to the `AssistBot` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Chat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "message" TEXT NOT NULL,
    "assistBotId" INTEGER NOT NULL,
    CONSTRAINT "Chat_assistBotId_fkey" FOREIGN KEY ("assistBotId") REFERENCES "AssistBot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AssistBot" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "telegramId" TEXT NOT NULL,
    "resultId" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "AssistBot_resultId_fkey" FOREIGN KEY ("resultId") REFERENCES "Result" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AssistBot_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AssistBot" ("id", "resultId", "telegramId") SELECT "id", "resultId", "telegramId" FROM "AssistBot";
DROP TABLE "AssistBot";
ALTER TABLE "new_AssistBot" RENAME TO "AssistBot";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
