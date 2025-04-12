/*
  Warnings:

  - Added the required column `userId` to the `Result` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AssistBot" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "telegramId" TEXT NOT NULL,
    "resultId" TEXT NOT NULL,
    "userId" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "AssistBot_resultId_fkey" FOREIGN KEY ("resultId") REFERENCES "Result" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AssistBot_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AssistBot" ("id", "resultId", "telegramId", "userId") SELECT "id", "resultId", "telegramId", "userId" FROM "AssistBot";
DROP TABLE "AssistBot";
ALTER TABLE "new_AssistBot" RENAME TO "AssistBot";
CREATE TABLE "new_Result" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "promptHash" TEXT NOT NULL DEFAULT '',
    "json" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Result_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Result" ("createdAt", "id", "json", "promptHash", "summary") SELECT "createdAt", "id", "json", "promptHash", "summary" FROM "Result";
DROP TABLE "Result";
ALTER TABLE "new_Result" RENAME TO "Result";
CREATE UNIQUE INDEX "Result_promptHash_key" ON "Result"("promptHash");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
