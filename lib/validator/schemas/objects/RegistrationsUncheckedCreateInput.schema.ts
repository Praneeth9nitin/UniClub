import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  studentId: z.string(),
  eventId: z.string(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable()
}).strict();
export const RegistrationsUncheckedCreateInputObjectSchema: z.ZodType<Prisma.RegistrationsUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationsUncheckedCreateInput>;
export const RegistrationsUncheckedCreateInputObjectZodSchema = makeSchema();
