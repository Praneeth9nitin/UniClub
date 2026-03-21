import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { statusSchema } from '../enums/status.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumstatusFilterObjectSchema as NestedEnumstatusFilterObjectSchema } from './NestedEnumstatusFilter.schema'

const nestedenumstatuswithaggregatesfilterSchema = z.object({
  equals: statusSchema.optional(),
  in: statusSchema.array().optional(),
  notIn: statusSchema.array().optional(),
  not: z.union([statusSchema, z.lazy(() => NestedEnumstatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumstatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumstatusFilterObjectSchema).optional()
}).strict();
export const NestedEnumstatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumstatusWithAggregatesFilter> = nestedenumstatuswithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumstatusWithAggregatesFilter>;
export const NestedEnumstatusWithAggregatesFilterObjectZodSchema = nestedenumstatuswithaggregatesfilterSchema;
