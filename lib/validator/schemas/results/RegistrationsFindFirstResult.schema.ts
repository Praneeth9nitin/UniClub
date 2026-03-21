import * as z from 'zod';
export const RegistrationsFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  studentId: z.string(),
  eventId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
  event: z.unknown(),
  student: z.unknown()
}));