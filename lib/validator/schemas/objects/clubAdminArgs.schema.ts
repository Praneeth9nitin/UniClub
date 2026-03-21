import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { clubAdminSelectObjectSchema as clubAdminSelectObjectSchema } from './clubAdminSelect.schema';
import { clubAdminIncludeObjectSchema as clubAdminIncludeObjectSchema } from './clubAdminInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => clubAdminSelectObjectSchema).optional(),
  include: z.lazy(() => clubAdminIncludeObjectSchema).optional()
}).strict();
export const clubAdminArgsObjectSchema = makeSchema();
export const clubAdminArgsObjectZodSchema = makeSchema();
