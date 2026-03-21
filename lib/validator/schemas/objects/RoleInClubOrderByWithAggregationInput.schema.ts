import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RoleInClubCountOrderByAggregateInputObjectSchema as RoleInClubCountOrderByAggregateInputObjectSchema } from './RoleInClubCountOrderByAggregateInput.schema';
import { RoleInClubMaxOrderByAggregateInputObjectSchema as RoleInClubMaxOrderByAggregateInputObjectSchema } from './RoleInClubMaxOrderByAggregateInput.schema';
import { RoleInClubMinOrderByAggregateInputObjectSchema as RoleInClubMinOrderByAggregateInputObjectSchema } from './RoleInClubMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  clubId: SortOrderSchema.optional(),
  _count: z.lazy(() => RoleInClubCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => RoleInClubMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => RoleInClubMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const RoleInClubOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.RoleInClubOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubOrderByWithAggregationInput>;
export const RoleInClubOrderByWithAggregationInputObjectZodSchema = makeSchema();
