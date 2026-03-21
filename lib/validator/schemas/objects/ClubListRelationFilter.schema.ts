import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubWhereInputObjectSchema as ClubWhereInputObjectSchema } from './ClubWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ClubWhereInputObjectSchema).optional(),
  some: z.lazy(() => ClubWhereInputObjectSchema).optional(),
  none: z.lazy(() => ClubWhereInputObjectSchema).optional()
}).strict();
export const ClubListRelationFilterObjectSchema: z.ZodType<Prisma.ClubListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ClubListRelationFilter>;
export const ClubListRelationFilterObjectZodSchema = makeSchema();
