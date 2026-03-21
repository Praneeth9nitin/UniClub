import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ClubOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ClubOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubOrderByRelationAggregateInput>;
export const ClubOrderByRelationAggregateInputObjectZodSchema = makeSchema();
