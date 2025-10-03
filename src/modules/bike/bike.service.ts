import prisma from "../../shared/prisma"

const getBikesFromDB = async () => {
  const result = await prisma.bike.findMany()

  return result
}


const createBike = async (payload: any) => {
  const isValidCustomer = await prisma.customer.findUniqueOrThrow({ where: { customerId: payload.customerId } });
  console.log("isValidCustomer", isValidCustomer);

  const result = await prisma.bike.create({ data: payload })
  return result
}

const getSingleBikeFromDB = async (id: string) => {
  const result = await prisma.bike.findUniqueOrThrow({ where: { bikeId: id } })
  return result
}

const __bikeService = {
  getBikesFromDB,
  createBike,
  getSingleBikeFromDB
}

export default __bikeService
