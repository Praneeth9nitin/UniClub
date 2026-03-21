import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const roleinclubscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => RoleInClubScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RoleInClubScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RoleInClubScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RoleInClubScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RoleInClubScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  clubId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const RoleInClubScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.RoleInClubScalarWhereWithAggregatesInput> = roleinclubscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.RoleInClubScalarWhereWithAggregatesInput>;
export const RoleInClubScalarWhereWithAggregatesInputObjectZodSchema = roleinclubscalarwherewithaggregatesinputSchema;
