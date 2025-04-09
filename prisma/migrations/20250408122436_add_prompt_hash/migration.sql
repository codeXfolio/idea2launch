-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Result" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "promptHash" TEXT NOT NULL DEFAULT '',
    "json" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Result" ("createdAt", "id", "json", "summary") SELECT "createdAt", "id", "json", "summary" FROM "Result";
DROP TABLE "Result";
ALTER TABLE "new_Result" RENAME TO "Result";
CREATE UNIQUE INDEX "Result_promptHash_key" ON "Result"("promptHash");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
