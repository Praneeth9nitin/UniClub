import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeCountOutputTypeSelectObjectSchema as CollegeCountOutputTypeSelectObjectSchema } from './CollegeCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CollegeCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const CollegeCountOutputTypeArgsObjectSchema = makeSchema();
export const CollegeCountOutputTypeArgsObjectZodSchema = makeSchema();
