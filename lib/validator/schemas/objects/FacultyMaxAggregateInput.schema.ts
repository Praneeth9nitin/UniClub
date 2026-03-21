import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  collegeId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  deletedAt: z.literal(true).optional(),
  email: z.literal(true).optional(),
  password: z.literal(true).optional()
}).strict();
export const FacultyMaxAggregateInputObjectSchema: z.ZodType<Prisma.FacultyMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FacultyMaxAggregateInputType>;
export const FacultyMaxAggregateInputObjectZodSchema = makeSchema();
