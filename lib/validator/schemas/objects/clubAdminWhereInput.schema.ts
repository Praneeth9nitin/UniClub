import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { ClubScalarRelationFilterObjectSchema as ClubScalarRelationFilterObjectSchema } from './ClubScalarRelationFilter.schema';
import { ClubWhereInputObjectSchema as ClubWhereInputObjectSchema } from './ClubWhereInput.schema'

const clubadminwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => clubAdminWhereInputObjectSchema), z.lazy(() => clubAdminWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => clubAdminWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => clubAdminWhereInputObjectSchema), z.lazy(() => clubAdminWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  firstName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  lastName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  password: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  clubId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  club: z.union([z.lazy(() => ClubScalarRelationFilterObjectSchema), z.lazy(() => ClubWhereInputObjectSchema)]).optional()
}).strict();
export const clubAdminWhereInputObjectSchema: z.ZodType<Prisma.clubAdminWhereInput> = clubadminwhereinputSchema as unknown as z.ZodType<Prisma.clubAdminWhereInput>;
export const clubAdminWhereInputObjectZodSchema = clubadminwhereinputSchema;
