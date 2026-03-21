import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  studentId: z.literal(true).optional(),
  eventId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  deletedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const RegistrationsCountAggregateInputObjectSchema: z.ZodType<Prisma.RegistrationsCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationsCountAggregateInputType>;
export const RegistrationsCountAggregateInputObjectZodSchema = makeSchema();
