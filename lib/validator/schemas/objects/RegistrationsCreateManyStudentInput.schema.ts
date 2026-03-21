import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  eventId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable()
}).strict();
export const RegistrationsCreateManyStudentInputObjectSchema: z.ZodType<Prisma.RegistrationsCreateManyStudentInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationsCreateManyStudentInput>;
export const RegistrationsCreateManyStudentInputObjectZodSchema = makeSchema();
