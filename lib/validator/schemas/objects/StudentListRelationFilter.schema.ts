import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentWhereInputObjectSchema as StudentWhereInputObjectSchema } from './StudentWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => StudentWhereInputObjectSchema).optional(),
  some: z.lazy(() => StudentWhereInputObjectSchema).optional(),
  none: z.lazy(() => StudentWhereInputObjectSchema).optional()
}).strict();
export const StudentListRelationFilterObjectSchema: z.ZodType<Prisma.StudentListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.StudentListRelationFilter>;
export const StudentListRelationFilterObjectZodSchema = makeSchema();
