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
export const clubAdminCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.clubAdminCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.clubAdminCountOrderByAggregateInput>;
export const clubAdminCountOrderByAggregateInputObjectZodSchema = makeSchema();
