import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RoleInClubWhereInputObjectSchema as RoleInClubWhereInputObjectSchema } from './RoleInClubWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoleInClubWhereInputObjectSchema).optional()
}).strict();
export const ClubCountOutputTypeCountRoleArgsObjectSchema = makeSchema();
export const ClubCountOutputTypeCountRoleArgsObjectZodSchema = makeSchema();
