import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubCountOutputTypeCountEventsArgsObjectSchema as ClubCountOutputTypeCountEventsArgsObjectSchema } from './ClubCountOutputTypeCountEventsArgs.schema';
import { ClubCountOutputTypeCountRoleArgsObjectSchema as ClubCountOutputTypeCountRoleArgsObjectSchema } from './ClubCountOutputTypeCountRoleArgs.schema';
import { ClubCountOutputTypeCountStudentsArgsObjectSchema as ClubCountOutputTypeCountStudentsArgsObjectSchema } from './ClubCountOutputTypeCountStudentsArgs.schema';
import { ClubCountOutputTypeCountFollowersArgsObjectSchema as ClubCountOutputTypeCountFollowersArgsObjectSchema } from './ClubCountOutputTypeCountFollowersArgs.schema'

const makeSchema = () => z.object({
  events: z.union([z.boolean(), z.lazy(() => ClubCountOutputTypeCountEventsArgsObjectSchema)]).optional(),
  role: z.union([z.boolean(), z.lazy(() => ClubCountOutputTypeCountRoleArgsObjectSchema)]).optional(),
  students: z.union([z.boolean(), z.lazy(() => ClubCountOutputTypeCountStudentsArgsObjectSchema)]).optional(),
  followers: z.union([z.boolean(), z.lazy(() => ClubCountOutputTypeCountFollowersArgsObjectSchema)]).optional()
}).strict();
export const ClubCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ClubCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ClubCountOutputTypeSelect>;
export const ClubCountOutputTypeSelectObjectZodSchema = makeSchema();
