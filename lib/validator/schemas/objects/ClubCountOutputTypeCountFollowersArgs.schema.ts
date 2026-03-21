import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentWhereInputObjectSchema as StudentWhereInputObjectSchema } from './StudentWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentWhereInputObjectSchema).optional()
}).strict();
export const ClubCountOutputTypeCountFollowersArgsObjectSchema = makeSchema();
export const ClubCountOutputTypeCountFollowersArgsObjectZodSchema = makeSchema();
