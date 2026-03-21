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
export const RegistrationsMaxAggregateInputObjectSchema: z.ZodType<Prisma.RegistrationsMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationsMaxAggregateInputType>;
export const RegistrationsMaxAggregateInputObjectZodSchema = makeSchema();
