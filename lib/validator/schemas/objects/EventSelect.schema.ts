import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubArgsObjectSchema as ClubArgsObjectSchema } from './ClubArgs.schema';
import { RegistrationsFindManySchema as RegistrationsFindManySchema } from '../findManyRegistrations.schema';
import { EventCountOutputTypeArgsObjectSchema as EventCountOutputTypeArgsObjectSchema } from './EventCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  clubId: z.boolean().optional(),
  date: z.boolean().optional(),
  time: z.boolean().optional(),
  mode: z.boolean().optional(),
  registrationLink: z.boolean().optional(),
  registrationFee: z.boolean().optional(),
  registrationOpen: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  venue: z.boolean().optional(),
  city: z.boolean().optional(),
  banner: z.boolean().optional(),
  capacity: z.boolean().optional(),
  registrationDeadline: z.boolean().optional(),
  status: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  category: z.boolean().optional(),
  club: z.union([z.boolean(), z.lazy(() => ClubArgsObjectSchema)]).optional(),
  registrations: z.union([z.boolean(), z.lazy(() => RegistrationsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => EventCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const EventSelectObjectSchema: z.ZodType<Prisma.EventSelect> = makeSchema() as unknown as z.ZodType<Prisma.EventSelect>;
export const EventSelectObjectZodSchema = makeSchema();
