import * as z from 'zod';
export const EventFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  clubId: z.string(),
  date: z.date(),
  time: z.string(),
  mode: z.unknown(),
  registrationLink: z.string().optional(),
  registrationFee: z.number().int().optional(),
  registrationOpen: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
  venue: z.string().optional(),
  city: z.string().optional(),
  banner: z.string().optional(),
  capacity: z.number().int().optional(),
  registrationDeadline: z.date().optional(),
  status: z.unknown(),
  isPublic: z.boolean(),
  category: z.string(),
  club: z.unknown(),
  registrations: z.array(z.unknown())
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