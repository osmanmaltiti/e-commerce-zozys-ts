-- CreateTable
CREATE TABLE "Door" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "dimension" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Door_pkey" PRIMARY KEY ("id")
);
