import z from "zod"

export const createCustomerSchema = z.object({
  name: z.string(),
  email: z.email(),
  phone: z.string()
})


