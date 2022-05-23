-- CreateTable
CREATE TABLE "Wood" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "dimension" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Wood_pkey" PRIMARY KEY ("id")
);
