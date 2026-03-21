import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { RegistrationsCountOrderByAggregateInputObjectSchema as RegistrationsCountOrderByAggregateInputObjectSchema } from './RegistrationsCountOrderByAggregateInput.schema';
import { RegistrationsMaxOrderByAggregateInputObjectSchema as RegistrationsMaxOrderByAggregateInputObjectSchema } from './RegistrationsMaxOrderByAggregateInput.schema';
import { RegistrationsMinOrderByAggregateInputObjectSchema as RegistrationsMinOrderByAggregateInputObjectSchema } from './RegistrationsMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  studentId: SortOrderSchema.optional(),
  eventId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => RegistrationsCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => RegistrationsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => RegistrationsMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const RegistrationsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.RegistrationsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationsOrderByWithAggregationInput>;
export const RegistrationsOrderByWithAggregationInputObjectZodSchema = makeSchema();
