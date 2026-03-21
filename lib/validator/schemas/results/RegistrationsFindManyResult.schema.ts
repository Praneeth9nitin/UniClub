import * as z from 'zod';
export const RegistrationsFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  studentId: z.string(),
  eventId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
  event: z.unknown(),
  student: z.unknown()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});