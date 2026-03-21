import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentInClubWhereInputObjectSchema as StudentInClubWhereInputObjectSchema } from './StudentInClubWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => StudentInClubWhereInputObjectSchema).optional(),
  some: z.lazy(() => StudentInClubWhereInputObjectSchema).optional(),
  none: z.lazy(() => StudentInClubWhereInputObjectSchema).optional()
}).strict();
export const StudentInClubListRelationFilterObjectSchema: z.ZodType<Prisma.StudentInClubListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubListRelationFilter>;
export const StudentInClubListRelationFilterObjectZodSchema = makeSchema();
