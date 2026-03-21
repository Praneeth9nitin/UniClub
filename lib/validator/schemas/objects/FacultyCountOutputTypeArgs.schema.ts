import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FacultyCountOutputTypeSelectObjectSchema as FacultyCountOutputTypeSelectObjectSchema } from './FacultyCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => FacultyCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const FacultyCountOutputTypeArgsObjectSchema = makeSchema();
export const FacultyCountOutputTypeArgsObjectZodSchema = makeSchema();
