import __serviceService from "./service.service";
import catchAsync from "../../shared/catchAsync";
import createResponse from "../../shared/createResponse";

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

  const data = await __serviceService.createServiceIntoDB(req.body)

  new createResponse(201, true, "Service record created successfully", data).send(res)
})


const updateService = catchAsync(async (req, res) => {
  const { id } = req.params
  const data = await __serviceService.updateServiceIntoDB(id, req.body)

  new createResponse(200, true, "Service marked as completed", data).send(res)
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
