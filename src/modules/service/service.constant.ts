import { STATUS } from "../../../generated/prisma"

export const responseStatusType = {
  PENDING: "pending",
  INPROGRES: "in-progres",
  DONE: "done"
}


export const requestStatusType = {
  pending: STATUS.PENDING,
  "in-progres": STATUS.INPROGRES,
  done: STATUS.DONE
}
