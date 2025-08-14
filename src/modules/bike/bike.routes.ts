import express from 'express'
import __bikeController from './bike.controller';

const bikeRoutes = express.Router();

bikeRoutes.get("/", __bikeController.getBikes)

bikeRoutes.post("/", __bikeController.createBike)

bikeRoutes.get("/:id", __bikeController.getSingleBike)

export default bikeRoutes



