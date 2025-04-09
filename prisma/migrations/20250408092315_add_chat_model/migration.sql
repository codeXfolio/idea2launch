-- CreateTable
CREATE TABLE "AssistBot" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "telegramId" TEXT NOT NULL,
    "resultId" TEXT NOT NULL,
    CONSTRAINT "AssistBot_resultId_fkey" FOREIGN KEY ("resultId") REFERENCES "Result" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
