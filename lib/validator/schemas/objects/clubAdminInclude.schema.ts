import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubArgsObjectSchema as ClubArgsObjectSchema } from './ClubArgs.schema'

const makeSchema = () => z.object({
  club: z.union([z.boolean(), z.lazy(() => ClubArgsObjectSchema)]).optional()
}).strict();
export const clubAdminIncludeObjectSchema: z.ZodType<Prisma.clubAdminInclude> = makeSchema() as unknown as z.ZodType<Prisma.clubAdminInclude>;
export const clubAdminIncludeObjectZodSchema = makeSchema();
