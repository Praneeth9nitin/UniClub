import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RoleInClubCountOutputTypeCountMembersArgsObjectSchema as RoleInClubCountOutputTypeCountMembersArgsObjectSchema } from './RoleInClubCountOutputTypeCountMembersArgs.schema'

const makeSchema = () => z.object({
  members: z.union([z.boolean(), z.lazy(() => RoleInClubCountOutputTypeCountMembersArgsObjectSchema)]).optional()
}).strict();
export const RoleInClubCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.RoleInClubCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubCountOutputTypeSelect>;
export const RoleInClubCountOutputTypeSelectObjectZodSchema = makeSchema();
