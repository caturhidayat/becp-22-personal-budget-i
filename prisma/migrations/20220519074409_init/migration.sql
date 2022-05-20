-- CreateTable
CREATE TABLE "envelopes" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "budget" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "envelopes_pkey" PRIMARY KEY ("id")
);
