import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubArgsObjectSchema as ClubArgsObjectSchema } from './ClubArgs.schema';
import { StudentInClubFindManySchema as StudentInClubFindManySchema } from '../findManyStudentInClub.schema';
import { RoleInClubCountOutputTypeArgsObjectSchema as RoleInClubCountOutputTypeArgsObjectSchema } from './RoleInClubCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  clubId: z.boolean().optional(),
  club: z.union([z.boolean(), z.lazy(() => ClubArgsObjectSchema)]).optional(),
  members: z.union([z.boolean(), z.lazy(() => StudentInClubFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => RoleInClubCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const RoleInClubSelectObjectSchema: z.ZodType<Prisma.RoleInClubSelect> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubSelect>;
export const RoleInClubSelectObjectZodSchema = makeSchema();
