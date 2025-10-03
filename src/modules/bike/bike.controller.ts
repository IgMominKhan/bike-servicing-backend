import __bikeService from "./bike.service";
import catchAsync from "../../shared/catchAsync";
import createResponse from "../../shared/createResponse";
import { createBikeValidationSchema } from "./bike.validations";

const getBikes = catchAsync(async (_req, res) => {
  const data = await __bikeService.getBikesFromDB();

  new createResponse(200, true, "Bikes fetched successfully", data).send(res)
})


const createBike = catchAsync(async (req, res) => {
  const payload = await createBikeValidationSchema.parseAsync(req.body);

  const data = await __bikeService.createBike(payload)

  new createResponse(200, true, "Bike created successfully", data).send(res)
})


const getSingleBike = catchAsync(async (req, res) => {
  const { id } = req.params

  const data = await __bikeService.getSingleBikeFromDB(id);

  new createResponse(200, true, "Bike fetched successfully", data).send(res)
})


const __bikeController = {
  getBikes,
  createBike,
  getSingleBike,

}

export default __bikeController
