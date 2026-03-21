import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { modeSchema } from '../enums/mode.schema';
import { NestedEnummodeWithAggregatesFilterObjectSchema as NestedEnummodeWithAggregatesFilterObjectSchema } from './NestedEnummodeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnummodeFilterObjectSchema as NestedEnummodeFilterObjectSchema } from './NestedEnummodeFilter.schema'

const makeSchema = () => z.object({
  equals: modeSchema.optional(),
  in: modeSchema.array().optional(),
  notIn: modeSchema.array().optional(),
  not: z.union([modeSchema, z.lazy(() => NestedEnummodeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnummodeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnummodeFilterObjectSchema).optional()
}).strict();
export const EnummodeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnummodeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnummodeWithAggregatesFilter>;
export const EnummodeWithAggregatesFilterObjectZodSchema = makeSchema();
