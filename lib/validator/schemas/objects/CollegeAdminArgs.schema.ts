import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeAdminSelectObjectSchema as CollegeAdminSelectObjectSchema } from './CollegeAdminSelect.schema';
import { CollegeAdminIncludeObjectSchema as CollegeAdminIncludeObjectSchema } from './CollegeAdminInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CollegeAdminSelectObjectSchema).optional(),
  include: z.lazy(() => CollegeAdminIncludeObjectSchema).optional()
}).strict();
export const CollegeAdminArgsObjectSchema = makeSchema();
export const CollegeAdminArgsObjectZodSchema = makeSchema();
