import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  studentId: z.string(),
  eventId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable()
}).strict();
export const RegistrationsCreateManyInputObjectSchema: z.ZodType<Prisma.RegistrationsCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationsCreateManyInput>;
export const RegistrationsCreateManyInputObjectZodSchema = makeSchema();
