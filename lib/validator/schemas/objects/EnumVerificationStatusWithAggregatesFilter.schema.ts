import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VerificationStatusSchema } from '../enums/VerificationStatus.schema';
import { NestedEnumVerificationStatusWithAggregatesFilterObjectSchema as NestedEnumVerificationStatusWithAggregatesFilterObjectSchema } from './NestedEnumVerificationStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumVerificationStatusFilterObjectSchema as NestedEnumVerificationStatusFilterObjectSchema } from './NestedEnumVerificationStatusFilter.schema'

const makeSchema = () => z.object({
  equals: VerificationStatusSchema.optional(),
  in: VerificationStatusSchema.array().optional(),
  notIn: VerificationStatusSchema.array().optional(),
  not: z.union([VerificationStatusSchema, z.lazy(() => NestedEnumVerificationStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumVerificationStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumVerificationStatusFilterObjectSchema).optional()
}).strict();
export const EnumVerificationStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumVerificationStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumVerificationStatusWithAggregatesFilter>;
export const EnumVerificationStatusWithAggregatesFilterObjectZodSchema = makeSchema();
