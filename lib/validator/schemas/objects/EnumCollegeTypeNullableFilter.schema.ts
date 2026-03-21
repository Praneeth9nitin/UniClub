import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeTypeSchema } from '../enums/CollegeType.schema';
import { NestedEnumCollegeTypeNullableFilterObjectSchema as NestedEnumCollegeTypeNullableFilterObjectSchema } from './NestedEnumCollegeTypeNullableFilter.schema'

const makeSchema = () => z.object({
  equals: CollegeTypeSchema.optional().nullable(),
  in: CollegeTypeSchema.array().optional().nullable(),
  notIn: CollegeTypeSchema.array().optional().nullable(),
  not: z.union([CollegeTypeSchema, z.lazy(() => NestedEnumCollegeTypeNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const EnumCollegeTypeNullableFilterObjectSchema: z.ZodType<Prisma.EnumCollegeTypeNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumCollegeTypeNullableFilter>;
export const EnumCollegeTypeNullableFilterObjectZodSchema = makeSchema();
