import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { modeSchema } from '../enums/mode.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnummodeFilterObjectSchema as NestedEnummodeFilterObjectSchema } from './NestedEnummodeFilter.schema'

const nestedenummodewithaggregatesfilterSchema = z.object({
  equals: modeSchema.optional(),
  in: modeSchema.array().optional(),
  notIn: modeSchema.array().optional(),
  not: z.union([modeSchema, z.lazy(() => NestedEnummodeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnummodeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnummodeFilterObjectSchema).optional()
}).strict();
export const NestedEnummodeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnummodeWithAggregatesFilter> = nestedenummodewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnummodeWithAggregatesFilter>;
export const NestedEnummodeWithAggregatesFilterObjectZodSchema = nestedenummodewithaggregatesfilterSchema;
