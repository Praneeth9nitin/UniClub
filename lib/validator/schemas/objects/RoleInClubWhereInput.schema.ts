import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { ClubScalarRelationFilterObjectSchema as ClubScalarRelationFilterObjectSchema } from './ClubScalarRelationFilter.schema';
import { ClubWhereInputObjectSchema as ClubWhereInputObjectSchema } from './ClubWhereInput.schema';
import { StudentInClubListRelationFilterObjectSchema as StudentInClubListRelationFilterObjectSchema } from './StudentInClubListRelationFilter.schema'

const roleinclubwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RoleInClubWhereInputObjectSchema), z.lazy(() => RoleInClubWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RoleInClubWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RoleInClubWhereInputObjectSchema), z.lazy(() => RoleInClubWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  clubId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  club: z.union([z.lazy(() => ClubScalarRelationFilterObjectSchema), z.lazy(() => ClubWhereInputObjectSchema)]).optional(),
  members: z.lazy(() => StudentInClubListRelationFilterObjectSchema).optional()
}).strict();
export const RoleInClubWhereInputObjectSchema: z.ZodType<Prisma.RoleInClubWhereInput> = roleinclubwhereinputSchema as unknown as z.ZodType<Prisma.RoleInClubWhereInput>;
export const RoleInClubWhereInputObjectZodSchema = roleinclubwhereinputSchema;
