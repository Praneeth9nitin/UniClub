import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeWhereInputObjectSchema as CollegeWhereInputObjectSchema } from './CollegeWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => CollegeWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => CollegeWhereInputObjectSchema).optional().nullable()
}).strict();
export const CollegeNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.CollegeNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CollegeNullableScalarRelationFilter>;
export const CollegeNullableScalarRelationFilterObjectZodSchema = makeSchema();
