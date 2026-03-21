import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const CollegeOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.CollegeOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeOrderByRelationAggregateInput>;
export const CollegeOrderByRelationAggregateInputObjectZodSchema = makeSchema();
