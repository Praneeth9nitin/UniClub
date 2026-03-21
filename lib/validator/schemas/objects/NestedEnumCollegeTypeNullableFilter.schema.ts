import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeTypeSchema } from '../enums/CollegeType.schema'

const nestedenumcollegetypenullablefilterSchema = z.object({
  equals: CollegeTypeSchema.optional().nullable(),
  in: CollegeTypeSchema.array().optional().nullable(),
  notIn: CollegeTypeSchema.array().optional().nullable(),
  not: z.union([CollegeTypeSchema, z.lazy(() => NestedEnumCollegeTypeNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedEnumCollegeTypeNullableFilterObjectSchema: z.ZodType<Prisma.NestedEnumCollegeTypeNullableFilter> = nestedenumcollegetypenullablefilterSchema as unknown as z.ZodType<Prisma.NestedEnumCollegeTypeNullableFilter>;
export const NestedEnumCollegeTypeNullableFilterObjectZodSchema = nestedenumcollegetypenullablefilterSchema;
