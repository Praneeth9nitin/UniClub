import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  description: z.literal(true).optional(),
  clubId: z.literal(true).optional(),
  date: z.literal(true).optional(),
  time: z.literal(true).optional(),
  mode: z.literal(true).optional(),
  registrationLink: z.literal(true).optional(),
  registrationFee: z.literal(true).optional(),
  registrationOpen: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  deletedAt: z.literal(true).optional(),
  venue: z.literal(true).optional(),
  city: z.literal(true).optional(),
  banner: z.literal(true).optional(),
  capacity: z.literal(true).optional(),
  registrationDeadline: z.literal(true).optional(),
  status: z.literal(true).optional(),
  isPublic: z.literal(true).optional(),
  category: z.literal(true).optional()
}).strict();
export const EventMinAggregateInputObjectSchema: z.ZodType<Prisma.EventMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EventMinAggregateInputType>;
export const EventMinAggregateInputObjectZodSchema = makeSchema();
