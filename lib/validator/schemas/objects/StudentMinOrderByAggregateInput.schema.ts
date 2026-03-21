import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  rollnumber: SortOrderSchema.optional(),
  collegeId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional()
}).strict();
export const StudentMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StudentMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentMinOrderByAggregateInput>;
export const StudentMinOrderByAggregateInputObjectZodSchema = makeSchema();
