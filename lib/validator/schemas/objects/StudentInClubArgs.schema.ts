import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentInClubSelectObjectSchema as StudentInClubSelectObjectSchema } from './StudentInClubSelect.schema';
import { StudentInClubIncludeObjectSchema as StudentInClubIncludeObjectSchema } from './StudentInClubInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => StudentInClubSelectObjectSchema).optional(),
  include: z.lazy(() => StudentInClubIncludeObjectSchema).optional()
}).strict();
export const StudentInClubArgsObjectSchema = makeSchema();
export const StudentInClubArgsObjectZodSchema = makeSchema();
