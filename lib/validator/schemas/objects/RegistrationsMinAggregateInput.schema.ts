import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  studentId: z.literal(true).optional(),
  eventId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  deletedAt: z.literal(true).optional()
}).strict();
export const RegistrationsMinAggregateInputObjectSchema: z.ZodType<Prisma.RegistrationsMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationsMinAggregateInputType>;
export const RegistrationsMinAggregateInputObjectZodSchema = makeSchema();
