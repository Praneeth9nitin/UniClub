import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  clubId: SortOrderSchema.optional()
}).strict();
export const clubAdminMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.clubAdminMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.clubAdminMinOrderByAggregateInput>;
export const clubAdminMinOrderByAggregateInputObjectZodSchema = makeSchema();
