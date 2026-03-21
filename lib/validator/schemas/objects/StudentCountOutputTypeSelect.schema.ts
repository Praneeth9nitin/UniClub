import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentCountOutputTypeCountRegistrationsArgsObjectSchema as StudentCountOutputTypeCountRegistrationsArgsObjectSchema } from './StudentCountOutputTypeCountRegistrationsArgs.schema';
import { StudentCountOutputTypeCountClubsArgsObjectSchema as StudentCountOutputTypeCountClubsArgsObjectSchema } from './StudentCountOutputTypeCountClubsArgs.schema';
import { StudentCountOutputTypeCountFollowsArgsObjectSchema as StudentCountOutputTypeCountFollowsArgsObjectSchema } from './StudentCountOutputTypeCountFollowsArgs.schema';
import { StudentCountOutputTypeCountFollowsClubArgsObjectSchema as StudentCountOutputTypeCountFollowsClubArgsObjectSchema } from './StudentCountOutputTypeCountFollowsClubArgs.schema'

const makeSchema = () => z.object({
  registrations: z.union([z.boolean(), z.lazy(() => StudentCountOutputTypeCountRegistrationsArgsObjectSchema)]).optional(),
  clubs: z.union([z.boolean(), z.lazy(() => StudentCountOutputTypeCountClubsArgsObjectSchema)]).optional(),
  follows: z.union([z.boolean(), z.lazy(() => StudentCountOutputTypeCountFollowsArgsObjectSchema)]).optional(),
  followsClub: z.union([z.boolean(), z.lazy(() => StudentCountOutputTypeCountFollowsClubArgsObjectSchema)]).optional()
}).strict();
export const StudentCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.StudentCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.StudentCountOutputTypeSelect>;
export const StudentCountOutputTypeSelectObjectZodSchema = makeSchema();
