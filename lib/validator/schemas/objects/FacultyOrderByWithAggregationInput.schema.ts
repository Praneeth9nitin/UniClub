import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { FacultyCountOrderByAggregateInputObjectSchema as FacultyCountOrderByAggregateInputObjectSchema } from './FacultyCountOrderByAggregateInput.schema';
import { FacultyMaxOrderByAggregateInputObjectSchema as FacultyMaxOrderByAggregateInputObjectSchema } from './FacultyMaxOrderByAggregateInput.schema';
import { FacultyMinOrderByAggregateInputObjectSchema as FacultyMinOrderByAggregateInputObjectSchema } from './FacultyMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  collegeId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  email: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  _count: z.lazy(() => FacultyCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => FacultyMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => FacultyMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const FacultyOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.FacultyOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.FacultyOrderByWithAggregationInput>;
export const FacultyOrderByWithAggregationInputObjectZodSchema = makeSchema();
