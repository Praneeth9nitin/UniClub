import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  establisedYear: SortOrderSchema.optional()
}).strict();
export const CollegeAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CollegeAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeAvgOrderByAggregateInput>;
export const CollegeAvgOrderByAggregateInputObjectZodSchema = makeSchema();
