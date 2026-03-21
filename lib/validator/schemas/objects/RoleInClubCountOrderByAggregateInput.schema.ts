import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  clubId: SortOrderSchema.optional()
}).strict();
export const RoleInClubCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RoleInClubCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubCountOrderByAggregateInput>;
export const RoleInClubCountOrderByAggregateInputObjectZodSchema = makeSchema();
