import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubArgsObjectSchema as ClubArgsObjectSchema } from './ClubArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  firstName: z.boolean().optional(),
  lastName: z.boolean().optional(),
  email: z.boolean().optional(),
  password: z.boolean().optional(),
  clubId: z.boolean().optional(),
  club: z.union([z.boolean(), z.lazy(() => ClubArgsObjectSchema)]).optional()
}).strict();
export const clubAdminSelectObjectSchema: z.ZodType<Prisma.clubAdminSelect> = makeSchema() as unknown as z.ZodType<Prisma.clubAdminSelect>;
export const clubAdminSelectObjectZodSchema = makeSchema();
