import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RoleInClubWhereInputObjectSchema as RoleInClubWhereInputObjectSchema } from './RoleInClubWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => RoleInClubWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => RoleInClubWhereInputObjectSchema).optional()
}).strict();
export const RoleInClubScalarRelationFilterObjectSchema: z.ZodType<Prisma.RoleInClubScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubScalarRelationFilter>;
export const RoleInClubScalarRelationFilterObjectZodSchema = makeSchema();
