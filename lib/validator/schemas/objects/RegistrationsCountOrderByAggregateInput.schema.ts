import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  studentId: SortOrderSchema.optional(),
  eventId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional()
}).strict();
export const RegistrationsCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RegistrationsCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationsCountOrderByAggregateInput>;
export const RegistrationsCountOrderByAggregateInputObjectZodSchema = makeSchema();
