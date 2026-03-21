import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubWhereInputObjectSchema as ClubWhereInputObjectSchema } from './ClubWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClubWhereInputObjectSchema).optional()
}).strict();
export const StudentCountOutputTypeCountFollowsClubArgsObjectSchema = makeSchema();
export const StudentCountOutputTypeCountFollowsClubArgsObjectZodSchema = makeSchema();
