import * as z from "zod"
const requestValidator = async (schema: z.ZodSchema, payload: any) => {
  await schema.parseAsync(payload)
}

export default requestValidator
