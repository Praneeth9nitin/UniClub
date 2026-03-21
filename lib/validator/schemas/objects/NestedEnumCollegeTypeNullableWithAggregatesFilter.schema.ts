import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeTypeSchema } from '../enums/CollegeType.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumCollegeTypeNullableFilterObjectSchema as NestedEnumCollegeTypeNullableFilterObjectSchema } from './NestedEnumCollegeTypeNullableFilter.schema'

const nestedenumcollegetypenullablewithaggregatesfilterSchema = z.object({
  equals: CollegeTypeSchema.optional().nullable(),
  in: CollegeTypeSchema.array().optional().nullable(),
  notIn: CollegeTypeSchema.array().optional().nullable(),
  not: z.union([CollegeTypeSchema, z.lazy(() => NestedEnumCollegeTypeNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumCollegeTypeNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumCollegeTypeNullableFilterObjectSchema).optional()
}).strict();
export const NestedEnumCollegeTypeNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumCollegeTypeNullableWithAggregatesFilter> = nestedenumcollegetypenullablewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumCollegeTypeNullableWithAggregatesFilter>;
export const NestedEnumCollegeTypeNullableWithAggregatesFilterObjectZodSchema = nestedenumcollegetypenullablewithaggregatesfilterSchema;
