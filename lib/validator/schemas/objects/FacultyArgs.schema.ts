import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FacultySelectObjectSchema as FacultySelectObjectSchema } from './FacultySelect.schema';
import { FacultyIncludeObjectSchema as FacultyIncludeObjectSchema } from './FacultyInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => FacultySelectObjectSchema).optional(),
  include: z.lazy(() => FacultyIncludeObjectSchema).optional()
}).strict();
export const FacultyArgsObjectSchema = makeSchema();
export const FacultyArgsObjectZodSchema = makeSchema();
