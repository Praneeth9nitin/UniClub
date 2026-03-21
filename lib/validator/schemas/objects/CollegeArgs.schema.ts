import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeSelectObjectSchema as CollegeSelectObjectSchema } from './CollegeSelect.schema';
import { CollegeIncludeObjectSchema as CollegeIncludeObjectSchema } from './CollegeInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CollegeSelectObjectSchema).optional(),
  include: z.lazy(() => CollegeIncludeObjectSchema).optional()
}).strict();
export const CollegeArgsObjectSchema = makeSchema();
export const CollegeArgsObjectZodSchema = makeSchema();
