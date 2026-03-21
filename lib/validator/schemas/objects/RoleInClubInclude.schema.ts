import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubArgsObjectSchema as ClubArgsObjectSchema } from './ClubArgs.schema';
import { StudentInClubFindManySchema as StudentInClubFindManySchema } from '../findManyStudentInClub.schema';
import { RoleInClubCountOutputTypeArgsObjectSchema as RoleInClubCountOutputTypeArgsObjectSchema } from './RoleInClubCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  club: z.union([z.boolean(), z.lazy(() => ClubArgsObjectSchema)]).optional(),
  members: z.union([z.boolean(), z.lazy(() => StudentInClubFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => RoleInClubCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const RoleInClubIncludeObjectSchema: z.ZodType<Prisma.RoleInClubInclude> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubInclude>;
export const RoleInClubIncludeObjectZodSchema = makeSchema();
