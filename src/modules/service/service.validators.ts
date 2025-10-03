import z from "zod";

export const createServiceValidationSchema = z.object({
  bikeId: z.uuid(),
  serviceDate: z.iso.datetime(),
  status: z.enum(['pending', 'in-progres', 'done']),
  description: z.string()
});

export const updateServiceValidationSchema = createServiceValidationSchema.partial();
