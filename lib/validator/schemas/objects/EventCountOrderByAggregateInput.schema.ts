import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  clubId: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  time: SortOrderSchema.optional(),
  mode: SortOrderSchema.optional(),
  registrationLink: SortOrderSchema.optional(),
  registrationFee: SortOrderSchema.optional(),
  registrationOpen: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional(),
  venue: SortOrderSchema.optional(),
  city: SortOrderSchema.optional(),
  banner: SortOrderSchema.optional(),
  capacity: SortOrderSchema.optional(),
  registrationDeadline: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  category: SortOrderSchema.optional()
}).strict();
export const EventCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EventCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCountOrderByAggregateInput>;
export const EventCountOrderByAggregateInputObjectZodSchema = makeSchema();
