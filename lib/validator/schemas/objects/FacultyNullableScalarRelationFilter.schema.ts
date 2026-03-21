import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FacultyWhereInputObjectSchema as FacultyWhereInputObjectSchema } from './FacultyWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => FacultyWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => FacultyWhereInputObjectSchema).optional().nullable()
}).strict();
export const FacultyNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.FacultyNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.FacultyNullableScalarRelationFilter>;
export const FacultyNullableScalarRelationFilterObjectZodSchema = makeSchema();
