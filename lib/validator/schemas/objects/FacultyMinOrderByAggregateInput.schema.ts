import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  collegeId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  password: SortOrderSchema.optional()
}).strict();
export const FacultyMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FacultyMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FacultyMinOrderByAggregateInput>;
export const FacultyMinOrderByAggregateInputObjectZodSchema = makeSchema();
