import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeAdminWhereInputObjectSchema as CollegeAdminWhereInputObjectSchema } from './CollegeAdminWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => CollegeAdminWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => CollegeAdminWhereInputObjectSchema).optional().nullable()
}).strict();
export const CollegeAdminNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.CollegeAdminNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CollegeAdminNullableScalarRelationFilter>;
export const CollegeAdminNullableScalarRelationFilterObjectZodSchema = makeSchema();
