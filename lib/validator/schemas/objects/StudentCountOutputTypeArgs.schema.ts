import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentCountOutputTypeSelectObjectSchema as StudentCountOutputTypeSelectObjectSchema } from './StudentCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => StudentCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const StudentCountOutputTypeArgsObjectSchema = makeSchema();
export const StudentCountOutputTypeArgsObjectZodSchema = makeSchema();
