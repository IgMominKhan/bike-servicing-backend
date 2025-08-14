-- CreateEnum
CREATE TYPE "public"."STATUS" AS ENUM ('pending', 'in-progres', 'done');

-- CreateTable
CREATE TABLE "public"."customers" (
    "customerId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("customerId")
);

-- CreateTable
CREATE TABLE "public"."Bike" (
    "bikeId" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "customerId" TEXT NOT NULL,

    CONSTRAINT "Bike_pkey" PRIMARY KEY ("bikeId")
);

-- CreateTable
CREATE TABLE "public"."ServiceRecord" (
    "serviceId" TEXT NOT NULL,
    "bikeId" TEXT NOT NULL,
    "seviceDate" TIMESTAMP(3) NOT NULL,
    "completionDate" TIMESTAMP(3),
    "description" TEXT NOT NULL,
    "status" "public"."STATUS" NOT NULL DEFAULT 'pending',

    CONSTRAINT "ServiceRecord_pkey" PRIMARY KEY ("serviceId")
);

-- CreateIndex
CREATE UNIQUE INDEX "customers_customerId_key" ON "public"."customers"("customerId");

-- CreateIndex
CREATE UNIQUE INDEX "customers_email_key" ON "public"."customers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Bike_bikeId_key" ON "public"."Bike"("bikeId");

-- CreateIndex
CREATE UNIQUE INDEX "ServiceRecord_serviceId_key" ON "public"."ServiceRecord"("serviceId");

-- AddForeignKey
ALTER TABLE "public"."Bike" ADD CONSTRAINT "Bike_bikeId_fkey" FOREIGN KEY ("bikeId") REFERENCES "public"."customers"("customerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ServiceRecord" ADD CONSTRAINT "ServiceRecord_bikeId_fkey" FOREIGN KEY ("bikeId") REFERENCES "public"."Bike"("bikeId") ON DELETE RESTRICT ON UPDATE CASCADE;
