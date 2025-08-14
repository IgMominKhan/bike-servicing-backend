-- DropForeignKey
ALTER TABLE "public"."Bike" DROP CONSTRAINT "Bike_bikeId_fkey";

-- AddForeignKey
ALTER TABLE "public"."Bike" ADD CONSTRAINT "Bike_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "public"."customers"("customerId") ON DELETE RESTRICT ON UPDATE CASCADE;
