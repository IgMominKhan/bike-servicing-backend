import { Request, Response } from "express";
import __serviceService from "./service.service";

const getServices = async (req: Request, res: Response) => {
  const data = await __serviceService.getServicesFromDB();

  res.status(200).json({
    success: true,
    message: "Service records fetched successfully",
    data
  })
}


const getSingleService = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await __serviceService.getSingleServiceFromDB(id);

  res.status(200).json({
    success: true,
    message: "Service record fetched successfully",
    data
  })
}


const createService = async (req: Request, res: Response) => {

  const data = await __serviceService.createServiceIntoDB(req.body)

  res.status(200).json({
    success: true,
    message: "Service record created successfully",
    data
  })

}


const updateService = async (req: Request, res: Response) => {
  const { id } = req.params
  const data = await __serviceService.updateServiceIntoDB(id, req.body)

  res.status(200).json({
    success: true,
    message: "Service marked as completed",
    data
  })
}


const getServiceStatus = async (req: Request, res: Response) => {
  const data = await __serviceService.getServiceStatusFromDB();

  res.status(200).json({
    success: true,
    message: "Overdue or pending services fetched successfully",
    data
  })

}
const __serviceController = {
  getServices,
  getSingleService,
  createService,
  updateService,
  getServiceStatus
}


export default __serviceController
