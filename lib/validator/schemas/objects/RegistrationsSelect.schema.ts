import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventArgsObjectSchema as EventArgsObjectSchema } from './EventArgs.schema';
import { StudentArgsObjectSchema as StudentArgsObjectSchema } from './StudentArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  studentId: z.boolean().optional(),
  eventId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  event: z.union([z.boolean(), z.lazy(() => EventArgsObjectSchema)]).optional(),
  student: z.union([z.boolean(), z.lazy(() => StudentArgsObjectSchema)]).optional()
}).strict();
export const RegistrationsSelectObjectSchema: z.ZodType<Prisma.RegistrationsSelect> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationsSelect>;
export const RegistrationsSelectObjectZodSchema = makeSchema();
