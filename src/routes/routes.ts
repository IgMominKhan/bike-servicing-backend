import express from 'express';
import customerRoutes from '../modules/customer/customer.routes';
import bikeRoutes from '../modules/bike/bike.routes';

const routes = express.Router();

routes.use("/customers", customerRoutes)

routes.use('/bikes', bikeRoutes)


export default routes

