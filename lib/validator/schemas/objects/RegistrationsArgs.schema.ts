import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationsSelectObjectSchema as RegistrationsSelectObjectSchema } from './RegistrationsSelect.schema';
import { RegistrationsIncludeObjectSchema as RegistrationsIncludeObjectSchema } from './RegistrationsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => RegistrationsSelectObjectSchema).optional(),
  include: z.lazy(() => RegistrationsIncludeObjectSchema).optional()
}).strict();
export const RegistrationsArgsObjectSchema = makeSchema();
export const RegistrationsArgsObjectZodSchema = makeSchema();
