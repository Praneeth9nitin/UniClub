import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  establisedYear: SortOrderSchema.optional()
}).strict();
export const CollegeSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CollegeSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeSumOrderByAggregateInput>;
export const CollegeSumOrderByAggregateInputObjectZodSchema = makeSchema();
