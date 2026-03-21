import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { modeSchema } from '../enums/mode.schema';
import { eventStatusSchema } from '../enums/eventStatus.schema';
import { ClubCreateNestedOneWithoutEventsInputObjectSchema as ClubCreateNestedOneWithoutEventsInputObjectSchema } from './ClubCreateNestedOneWithoutEventsInput.schema';
import { RegistrationsCreateNestedManyWithoutEventInputObjectSchema as RegistrationsCreateNestedManyWithoutEventInputObjectSchema } from './RegistrationsCreateNestedManyWithoutEventInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  date: z.coerce.date(),
  time: z.string(),
  mode: modeSchema,
  registrationLink: z.string().optional().nullable(),
  registrationFee: z.number().int().optional().nullable(),
  registrationOpen: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  venue: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  banner: z.string().optional().nullable(),
  capacity: z.number().int().optional().nullable(),
  registrationDeadline: z.coerce.date().optional().nullable(),
  status: eventStatusSchema.optional(),
  isPublic: z.boolean().optional(),
  category: z.string(),
  club: z.lazy(() => ClubCreateNestedOneWithoutEventsInputObjectSchema),
  registrations: z.lazy(() => RegistrationsCreateNestedManyWithoutEventInputObjectSchema).optional()
}).strict();
export const EventCreateInputObjectSchema: z.ZodType<Prisma.EventCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateInput>;
export const EventCreateInputObjectZodSchema = makeSchema();
