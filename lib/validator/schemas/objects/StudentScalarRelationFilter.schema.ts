import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentWhereInputObjectSchema as StudentWhereInputObjectSchema } from './StudentWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => StudentWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => StudentWhereInputObjectSchema).optional()
}).strict();
export const StudentScalarRelationFilterObjectSchema: z.ZodType<Prisma.StudentScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.StudentScalarRelationFilter>;
export const StudentScalarRelationFilterObjectZodSchema = makeSchema();
