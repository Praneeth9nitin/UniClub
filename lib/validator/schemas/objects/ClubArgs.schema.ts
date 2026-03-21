import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubSelectObjectSchema as ClubSelectObjectSchema } from './ClubSelect.schema';
import { ClubIncludeObjectSchema as ClubIncludeObjectSchema } from './ClubInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ClubSelectObjectSchema).optional(),
  include: z.lazy(() => ClubIncludeObjectSchema).optional()
}).strict();
export const ClubArgsObjectSchema = makeSchema();
export const ClubArgsObjectZodSchema = makeSchema();
