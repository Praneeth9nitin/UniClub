import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RoleInClubCountOutputTypeSelectObjectSchema as RoleInClubCountOutputTypeSelectObjectSchema } from './RoleInClubCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => RoleInClubCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const RoleInClubCountOutputTypeArgsObjectSchema = makeSchema();
export const RoleInClubCountOutputTypeArgsObjectZodSchema = makeSchema();
