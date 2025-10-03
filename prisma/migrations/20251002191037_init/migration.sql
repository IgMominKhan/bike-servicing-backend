-- DropForeignKey
ALTER TABLE "public"."ServiceRecord" DROP CONSTRAINT "ServiceRecord_bikeId_fkey";

-- AddForeignKey
ALTER TABLE "ServiceRecord" ADD CONSTRAINT "ServiceRecord_bikeId_fkey" FOREIGN KEY ("bikeId") REFERENCES "Bike"("bikeId") ON DELETE CASCADE ON UPDATE CASCADE;
