import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventCountOutputTypeCountRegistrationsArgsObjectSchema as EventCountOutputTypeCountRegistrationsArgsObjectSchema } from './EventCountOutputTypeCountRegistrationsArgs.schema'

const makeSchema = () => z.object({
  registrations: z.union([z.boolean(), z.lazy(() => EventCountOutputTypeCountRegistrationsArgsObjectSchema)]).optional()
}).strict();
export const EventCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.EventCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.EventCountOutputTypeSelect>;
export const EventCountOutputTypeSelectObjectZodSchema = makeSchema();
