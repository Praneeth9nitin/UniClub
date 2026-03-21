import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventArgsObjectSchema as EventArgsObjectSchema } from './EventArgs.schema';
import { StudentArgsObjectSchema as StudentArgsObjectSchema } from './StudentArgs.schema'

const makeSchema = () => z.object({
  event: z.union([z.boolean(), z.lazy(() => EventArgsObjectSchema)]).optional(),
  student: z.union([z.boolean(), z.lazy(() => StudentArgsObjectSchema)]).optional()
}).strict();
export const RegistrationsIncludeObjectSchema: z.ZodType<Prisma.RegistrationsInclude> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationsInclude>;
export const RegistrationsIncludeObjectZodSchema = makeSchema();
