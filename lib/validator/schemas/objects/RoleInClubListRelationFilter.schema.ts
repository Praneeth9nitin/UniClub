import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RoleInClubWhereInputObjectSchema as RoleInClubWhereInputObjectSchema } from './RoleInClubWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => RoleInClubWhereInputObjectSchema).optional(),
  some: z.lazy(() => RoleInClubWhereInputObjectSchema).optional(),
  none: z.lazy(() => RoleInClubWhereInputObjectSchema).optional()
}).strict();
export const RoleInClubListRelationFilterObjectSchema: z.ZodType<Prisma.RoleInClubListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubListRelationFilter>;
export const RoleInClubListRelationFilterObjectZodSchema = makeSchema();
