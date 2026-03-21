import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RoleInClubSelectObjectSchema as RoleInClubSelectObjectSchema } from './RoleInClubSelect.schema';
import { RoleInClubIncludeObjectSchema as RoleInClubIncludeObjectSchema } from './RoleInClubInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => RoleInClubSelectObjectSchema).optional(),
  include: z.lazy(() => RoleInClubIncludeObjectSchema).optional()
}).strict();
export const RoleInClubArgsObjectSchema = makeSchema();
export const RoleInClubArgsObjectZodSchema = makeSchema();
