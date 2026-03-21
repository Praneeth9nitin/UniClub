import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const collegeadminscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CollegeAdminScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CollegeAdminScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CollegeAdminScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CollegeAdminScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CollegeAdminScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  password: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  phone: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  collegeId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const CollegeAdminScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CollegeAdminScalarWhereWithAggregatesInput> = collegeadminscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CollegeAdminScalarWhereWithAggregatesInput>;
export const CollegeAdminScalarWhereWithAggregatesInputObjectZodSchema = collegeadminscalarwherewithaggregatesinputSchema;
