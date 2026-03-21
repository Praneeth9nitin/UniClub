import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { StudentCountOrderByAggregateInputObjectSchema as StudentCountOrderByAggregateInputObjectSchema } from './StudentCountOrderByAggregateInput.schema';
import { StudentMaxOrderByAggregateInputObjectSchema as StudentMaxOrderByAggregateInputObjectSchema } from './StudentMaxOrderByAggregateInput.schema';
import { StudentMinOrderByAggregateInputObjectSchema as StudentMinOrderByAggregateInputObjectSchema } from './StudentMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  rollnumber: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  collegeId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => StudentCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => StudentMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => StudentMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const StudentOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.StudentOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentOrderByWithAggregationInput>;
export const StudentOrderByWithAggregationInputObjectZodSchema = makeSchema();
