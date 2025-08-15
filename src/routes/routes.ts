import express from 'express';
import customerRoutes from '../modules/customer/customer.routes';
import bikeRoutes from '../modules/bike/bike.routes';
import serviceRoutes from '../modules/service/service.routes';

const routes = express.Router();

routes.use("/customers", customerRoutes)

routes.use('/bikes', bikeRoutes)

routes.use("/services", serviceRoutes)


export default routes

