import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventWhereInputObjectSchema as EventWhereInputObjectSchema } from './EventWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventWhereInputObjectSchema).optional()
}).strict();
export const ClubCountOutputTypeCountEventsArgsObjectSchema = makeSchema();
export const ClubCountOutputTypeCountEventsArgsObjectZodSchema = makeSchema();
