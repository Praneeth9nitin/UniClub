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
export const RegistrationsMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RegistrationsMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationsMinOrderByAggregateInput>;
export const RegistrationsMinOrderByAggregateInputObjectZodSchema = makeSchema();
