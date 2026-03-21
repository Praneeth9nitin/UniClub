import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const RegistrationsOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.RegistrationsOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationsOrderByRelationAggregateInput>;
export const RegistrationsOrderByRelationAggregateInputObjectZodSchema = makeSchema();
