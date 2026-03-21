import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  clubId: SortOrderSchema.optional()
}).strict();
export const RoleInClubMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RoleInClubMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubMinOrderByAggregateInput>;
export const RoleInClubMinOrderByAggregateInputObjectZodSchema = makeSchema();
