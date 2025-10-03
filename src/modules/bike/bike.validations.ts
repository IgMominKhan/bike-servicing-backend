import * as z from "zod"

export const createBikeValidationSchema = z.object({
  brand: z.string(),
  model: z.string(),
  year: z.number(),
  customerId: z.uuid()
})

