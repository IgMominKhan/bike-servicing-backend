import { Request, Response } from "express";
import __bikeService from "./bike.service";

const getBikes = async (req: Request, res: Response) => {
  const data = await __bikeService.getBikesFromDB();

  res.status(200).json({
    success: true,
    message: "Bikes fetched successfully",
    data
  })
}


const createBike = async (req: Request, res: Response) => {
  const data = await __bikeService.createBike(req.body)

  res.status(201).json({
    success: true,
    message: "Bike created successfully",
    data
  })
}


const getSingleBike = async (req: Request, res: Response) => {
  const { id } = req.params

  const data = await __bikeService.getSingleBikeFromDB(id);

  res.status(200).json({
    success: true,
    message: "Bike fetched successfully",
    data
  })
}


const __bikeController = {
  getBikes,
  createBike,
  getSingleBike,

}

export default __bikeController
