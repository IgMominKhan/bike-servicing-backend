import express from 'express';
import customerRoutes from '../modules/customer/customer.routes';

const routes = express.Router();

routes.use("/customer", customerRoutes)


export default routes

