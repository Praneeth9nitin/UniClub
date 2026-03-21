import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FacultyWhereInputObjectSchema as FacultyWhereInputObjectSchema } from './FacultyWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => FacultyWhereInputObjectSchema).optional(),
  some: z.lazy(() => FacultyWhereInputObjectSchema).optional(),
  none: z.lazy(() => FacultyWhereInputObjectSchema).optional()
}).strict();
export const FacultyListRelationFilterObjectSchema: z.ZodType<Prisma.FacultyListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.FacultyListRelationFilter>;
export const FacultyListRelationFilterObjectZodSchema = makeSchema();
