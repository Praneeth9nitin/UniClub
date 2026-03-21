import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const EventOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.EventOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EventOrderByRelationAggregateInput>;
export const EventOrderByRelationAggregateInputObjectZodSchema = makeSchema();
