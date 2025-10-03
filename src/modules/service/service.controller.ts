import __serviceService from "./service.service";
import catchAsync from "../../shared/catchAsync";
import createResponse from "../../shared/createResponse";
import { createServiceValidationSchema, updateServiceValidationSchema } from "./service.validators";

const getServices = catchAsync(async (_req, res) => {
  const data = await __serviceService.getServicesFromDB();

  new createResponse(200, true, "Service records fetched successfully", data).send(res)
})


const getSingleService = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = await __serviceService.getSingleServiceFromDB(id);

  new createResponse(200, true, "Service record fetched successfully", data).send(res)
})


const createService = catchAsync(async (req, res) => {

  const payload = await createServiceValidationSchema.parseAsync(req.body)

  const data = await __serviceService.createServiceIntoDB(payload)

  if (!data) return res.status(403).json({ success: false, status: 403, message: "No Bike Found" })

  new createResponse(201, true, "Service record created successfully", data).send(res)
})


// NOTE: SORRY SIR, I have modified the update service a bit
// INFO: instead of just marking the service as completed, we can update other fields as well

const updateService = catchAsync(async (req, res) => {

  const payload = await updateServiceValidationSchema.parseAsync(req.body)

  const data = await __serviceService.updateServiceIntoDB(req.params?.id, payload)

  new createResponse(200, true, "Service updated successfully", data).send(res)
})


const getServiceStatus = catchAsync(async (_req, res) => {
  const data = await __serviceService.getServiceStatusFromDB();


  new createResponse(200, true, "Overdue or pending services fetched successfully", data).send(res)
})


const __serviceController = {
  getServices,
  getSingleService,
  createService,
  updateService,
  getServiceStatus
}


export default __serviceController
