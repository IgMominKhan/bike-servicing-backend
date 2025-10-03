-- DropForeignKey
ALTER TABLE "public"."Bike" DROP CONSTRAINT "Bike_customerId_fkey";

-- AddForeignKey
ALTER TABLE "Bike" ADD CONSTRAINT "Bike_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("customerId") ON DELETE CASCADE ON UPDATE CASCADE;
