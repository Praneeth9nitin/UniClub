import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const StudentInClubOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.StudentInClubOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubOrderByRelationAggregateInput>;
export const StudentInClubOrderByRelationAggregateInputObjectZodSchema = makeSchema();
