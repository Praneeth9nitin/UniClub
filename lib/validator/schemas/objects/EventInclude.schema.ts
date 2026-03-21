import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubArgsObjectSchema as ClubArgsObjectSchema } from './ClubArgs.schema';
import { RegistrationsFindManySchema as RegistrationsFindManySchema } from '../findManyRegistrations.schema';
import { EventCountOutputTypeArgsObjectSchema as EventCountOutputTypeArgsObjectSchema } from './EventCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  club: z.union([z.boolean(), z.lazy(() => ClubArgsObjectSchema)]).optional(),
  registrations: z.union([z.boolean(), z.lazy(() => RegistrationsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => EventCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const EventIncludeObjectSchema: z.ZodType<Prisma.EventInclude> = makeSchema() as unknown as z.ZodType<Prisma.EventInclude>;
export const EventIncludeObjectZodSchema = makeSchema();
