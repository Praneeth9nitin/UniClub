import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const FacultyOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.FacultyOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FacultyOrderByRelationAggregateInput>;
export const FacultyOrderByRelationAggregateInputObjectZodSchema = makeSchema();
