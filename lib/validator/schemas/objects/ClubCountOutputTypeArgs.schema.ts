import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubCountOutputTypeSelectObjectSchema as ClubCountOutputTypeSelectObjectSchema } from './ClubCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ClubCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ClubCountOutputTypeArgsObjectSchema = makeSchema();
export const ClubCountOutputTypeArgsObjectZodSchema = makeSchema();
