import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { eventStatusSchema } from '../enums/eventStatus.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumeventStatusFilterObjectSchema as NestedEnumeventStatusFilterObjectSchema } from './NestedEnumeventStatusFilter.schema'

const nestedenumeventstatuswithaggregatesfilterSchema = z.object({
  equals: eventStatusSchema.optional(),
  in: eventStatusSchema.array().optional(),
  notIn: eventStatusSchema.array().optional(),
  not: z.union([eventStatusSchema, z.lazy(() => NestedEnumeventStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumeventStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumeventStatusFilterObjectSchema).optional()
}).strict();
export const NestedEnumeventStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumeventStatusWithAggregatesFilter> = nestedenumeventstatuswithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumeventStatusWithAggregatesFilter>;
export const NestedEnumeventStatusWithAggregatesFilterObjectZodSchema = nestedenumeventstatuswithaggregatesfilterSchema;
