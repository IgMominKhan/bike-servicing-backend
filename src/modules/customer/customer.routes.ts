import express from "express";
import __customerController from "./customer.controller";


const customerRoutes = express.Router()


customerRoutes.get('/', __customerController.getCustomers)

customerRoutes.post('/', __customerController.createCustomer)

customerRoutes.get('/:id', __customerController.getSingleCustomer)

customerRoutes.put('/:id', __customerController.updateCustomer)

customerRoutes.delete('/:id', __customerController.deleteCustomer)


export default customerRoutes
