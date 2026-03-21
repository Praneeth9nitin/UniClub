import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeTypeSchema } from '../enums/CollegeType.schema';
import { NestedEnumCollegeTypeNullableWithAggregatesFilterObjectSchema as NestedEnumCollegeTypeNullableWithAggregatesFilterObjectSchema } from './NestedEnumCollegeTypeNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumCollegeTypeNullableFilterObjectSchema as NestedEnumCollegeTypeNullableFilterObjectSchema } from './NestedEnumCollegeTypeNullableFilter.schema'

const makeSchema = () => z.object({
  equals: CollegeTypeSchema.optional().nullable(),
  in: CollegeTypeSchema.array().optional().nullable(),
  notIn: CollegeTypeSchema.array().optional().nullable(),
  not: z.union([CollegeTypeSchema, z.lazy(() => NestedEnumCollegeTypeNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumCollegeTypeNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumCollegeTypeNullableFilterObjectSchema).optional()
}).strict();
export const EnumCollegeTypeNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumCollegeTypeNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumCollegeTypeNullableWithAggregatesFilter>;
export const EnumCollegeTypeNullableWithAggregatesFilterObjectZodSchema = makeSchema();
