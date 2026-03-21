import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { modeSchema } from '../enums/mode.schema';
import { eventStatusSchema } from '../enums/eventStatus.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  clubId: z.string(),
  date: z.coerce.date(),
  time: z.string(),
  mode: modeSchema,
  registrationLink: z.string().optional().nullable(),
  registrationFee: z.number().int().optional().nullable(),
  registrationOpen: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  venue: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  banner: z.string().optional().nullable(),
  capacity: z.number().int().optional().nullable(),
  registrationDeadline: z.coerce.date().optional().nullable(),
  status: eventStatusSchema.optional(),
  isPublic: z.boolean().optional(),
  category: z.string()
}).strict();
export const EventUncheckedCreateWithoutRegistrationsInputObjectSchema: z.ZodType<Prisma.EventUncheckedCreateWithoutRegistrationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUncheckedCreateWithoutRegistrationsInput>;
export const EventUncheckedCreateWithoutRegistrationsInputObjectZodSchema = makeSchema();
