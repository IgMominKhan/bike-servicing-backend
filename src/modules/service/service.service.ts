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


const getServiceStatusFromDB = async () => {
  const result = await prisma.serviceRecord.findMany({
    where: {
      OR: [
        { status: STATUS.INPROGRES },
        { status: STATUS.PENDING },
      ]
    },
  })

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
