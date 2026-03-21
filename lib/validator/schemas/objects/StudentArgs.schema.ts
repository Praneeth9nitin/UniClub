import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentSelectObjectSchema as StudentSelectObjectSchema } from './StudentSelect.schema';
import { StudentIncludeObjectSchema as StudentIncludeObjectSchema } from './StudentInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => StudentSelectObjectSchema).optional(),
  include: z.lazy(() => StudentIncludeObjectSchema).optional()
}).strict();
export const StudentArgsObjectSchema = makeSchema();
export const StudentArgsObjectZodSchema = makeSchema();
