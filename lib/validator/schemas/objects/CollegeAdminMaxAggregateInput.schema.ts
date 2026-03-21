import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  email: z.literal(true).optional(),
  password: z.literal(true).optional(),
  phone: z.literal(true).optional(),
  collegeId: z.literal(true).optional()
}).strict();
export const CollegeAdminMaxAggregateInputObjectSchema: z.ZodType<Prisma.CollegeAdminMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CollegeAdminMaxAggregateInputType>;
export const CollegeAdminMaxAggregateInputObjectZodSchema = makeSchema();
