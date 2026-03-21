import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  phone: SortOrderSchema.optional(),
  collegeId: SortOrderSchema.optional()
}).strict();
export const CollegeAdminMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CollegeAdminMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeAdminMaxOrderByAggregateInput>;
export const CollegeAdminMaxOrderByAggregateInputObjectZodSchema = makeSchema();
