import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CollegeAdminCountOrderByAggregateInputObjectSchema as CollegeAdminCountOrderByAggregateInputObjectSchema } from './CollegeAdminCountOrderByAggregateInput.schema';
import { CollegeAdminMaxOrderByAggregateInputObjectSchema as CollegeAdminMaxOrderByAggregateInputObjectSchema } from './CollegeAdminMaxOrderByAggregateInput.schema';
import { CollegeAdminMinOrderByAggregateInputObjectSchema as CollegeAdminMinOrderByAggregateInputObjectSchema } from './CollegeAdminMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  phone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  collegeId: SortOrderSchema.optional(),
  _count: z.lazy(() => CollegeAdminCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CollegeAdminMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CollegeAdminMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CollegeAdminOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CollegeAdminOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeAdminOrderByWithAggregationInput>;
export const CollegeAdminOrderByWithAggregationInputObjectZodSchema = makeSchema();
