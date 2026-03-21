import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const roleinclubscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RoleInClubScalarWhereInputObjectSchema), z.lazy(() => RoleInClubScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RoleInClubScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RoleInClubScalarWhereInputObjectSchema), z.lazy(() => RoleInClubScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  clubId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const RoleInClubScalarWhereInputObjectSchema: z.ZodType<Prisma.RoleInClubScalarWhereInput> = roleinclubscalarwhereinputSchema as unknown as z.ZodType<Prisma.RoleInClubScalarWhereInput>;
export const RoleInClubScalarWhereInputObjectZodSchema = roleinclubscalarwhereinputSchema;
