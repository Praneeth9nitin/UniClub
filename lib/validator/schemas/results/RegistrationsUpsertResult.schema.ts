import * as z from 'zod';
export const RegistrationsUpsertResultSchema = z.object({
  id: z.string(),
  studentId: z.string(),
  eventId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
  event: z.unknown(),
  student: z.unknown()
});