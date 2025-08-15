import express from 'express'
import __serviceController from './service.controller'


const serviceRoutes = express.Router()

serviceRoutes.get("/", __serviceController.getServices)

serviceRoutes.get("/status", __serviceController.getServiceStatus)

serviceRoutes.get("/:id", __serviceController.getSingleService)

serviceRoutes.post("/", __serviceController.createService)

serviceRoutes.put("/:id", __serviceController.updateService)


export default serviceRoutes
