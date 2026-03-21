import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  firstName: z.literal(true).optional(),
  lastName: z.literal(true).optional(),
  email: z.literal(true).optional(),
  password: z.literal(true).optional(),
  rollnumber: z.literal(true).optional(),
  collegeId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  deletedAt: z.literal(true).optional()
}).strict();
export const StudentMinAggregateInputObjectSchema: z.ZodType<Prisma.StudentMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.StudentMinAggregateInputType>;
export const StudentMinAggregateInputObjectZodSchema = makeSchema();
