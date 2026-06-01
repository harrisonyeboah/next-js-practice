-- AlterTable
ALTER TABLE "Account" ALTER COLUMN "accountNumber" SET DEFAULT floor(random() * (999999 - 100000 + 1) + 100000)::int;
