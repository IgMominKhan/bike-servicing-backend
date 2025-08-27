import { gte } from "zod";
import { STATUS } from "../../../generated/prisma";
import prisma from "../../shared/prisma";
import { requestStatusType, responseStatusType } from "./service.constant";


const getServicesFromDB = async () => {
  const result = await prisma.serviceRecord.findMany();

  return result
}


const getSingleServiceFromDB = async (id: string) => {
  const result = await prisma.serviceRecord.findUnique({ where: { serviceId: id } })

  return result
}

const createServiceIntoDB = async (payload: any) => {

  // @ts-expect-error
  payload.status = requestStatusType[payload.status]

  const result = await prisma.serviceRecord.create({ data: payload })

  if (result.status) {
    // @ts-expect-error
    result.status = responseStatusType[result.status]
  }

  return result
}


const updateServiceIntoDB = async (id: string, payload: any) => {
  payload.status = STATUS.DONE
  const result = await prisma.serviceRecord.update({ where: { serviceId: id }, data: payload })

  return result
}

// INFO: get services those are pending or in-progerss
// and service date is older than seven days

const getServiceStatusFromDB = async () => {
  const olderThan7Days = new Date();

  olderThan7Days.setDate(olderThan7Days.getDate() - 7)

  // const result = await prisma.serviceRecord.findMany({
  //   where: {
  //     AND: [
  //       {
  //         OR: [
  //           { status: STATUS.INPROGRES },
  //           { status: STATUS.PENDING },
  //         ]
  //       },
  //       { serviceDate: { lte: olderThan7Days } }
  //     ]
  //   },
  // })


  const result = await prisma.$queryRaw`SELECT * FROM "ServiceRecord" WHERE "status" = 'in-progres' OR "status" = 'pending' AND "serviceDate" <= NOW() - INTERVAL '7 days'`;

  return result
}


const __serviceService = {
  getServicesFromDB,
  getSingleServiceFromDB,
  createServiceIntoDB,
  updateServiceIntoDB,
  getServiceStatusFromDB
}

export default __serviceService
