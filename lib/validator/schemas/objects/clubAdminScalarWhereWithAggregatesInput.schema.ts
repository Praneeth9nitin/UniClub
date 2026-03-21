import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const clubadminscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => clubAdminScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => clubAdminScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => clubAdminScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => clubAdminScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => clubAdminScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  firstName: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  lastName: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  password: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  clubId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const clubAdminScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.clubAdminScalarWhereWithAggregatesInput> = clubadminscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.clubAdminScalarWhereWithAggregatesInput>;
export const clubAdminScalarWhereWithAggregatesInputObjectZodSchema = clubadminscalarwherewithaggregatesinputSchema;
