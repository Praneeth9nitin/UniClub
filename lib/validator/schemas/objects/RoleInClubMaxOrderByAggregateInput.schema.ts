import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  clubId: SortOrderSchema.optional()
}).strict();
export const RoleInClubMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RoleInClubMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubMaxOrderByAggregateInput>;
export const RoleInClubMaxOrderByAggregateInputObjectZodSchema = makeSchema();
