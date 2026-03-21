import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { clubAdminCountOrderByAggregateInputObjectSchema as clubAdminCountOrderByAggregateInputObjectSchema } from './clubAdminCountOrderByAggregateInput.schema';
import { clubAdminMaxOrderByAggregateInputObjectSchema as clubAdminMaxOrderByAggregateInputObjectSchema } from './clubAdminMaxOrderByAggregateInput.schema';
import { clubAdminMinOrderByAggregateInputObjectSchema as clubAdminMinOrderByAggregateInputObjectSchema } from './clubAdminMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  clubId: SortOrderSchema.optional(),
  _count: z.lazy(() => clubAdminCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => clubAdminMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => clubAdminMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const clubAdminOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.clubAdminOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.clubAdminOrderByWithAggregationInput>;
export const clubAdminOrderByWithAggregationInputObjectZodSchema = makeSchema();
