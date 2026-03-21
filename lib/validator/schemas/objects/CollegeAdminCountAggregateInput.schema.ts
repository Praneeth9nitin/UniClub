import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  email: z.literal(true).optional(),
  password: z.literal(true).optional(),
  phone: z.literal(true).optional(),
  collegeId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const CollegeAdminCountAggregateInputObjectSchema: z.ZodType<Prisma.CollegeAdminCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CollegeAdminCountAggregateInputType>;
export const CollegeAdminCountAggregateInputObjectZodSchema = makeSchema();
