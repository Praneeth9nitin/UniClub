import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  studentId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable()
}).strict();
export const RegistrationsCreateManyEventInputObjectSchema: z.ZodType<Prisma.RegistrationsCreateManyEventInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationsCreateManyEventInput>;
export const RegistrationsCreateManyEventInputObjectZodSchema = makeSchema();
