import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const facultyscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => FacultyScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => FacultyScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FacultyScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FacultyScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => FacultyScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  collegeId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  password: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const FacultyScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.FacultyScalarWhereWithAggregatesInput> = facultyscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.FacultyScalarWhereWithAggregatesInput>;
export const FacultyScalarWhereWithAggregatesInputObjectZodSchema = facultyscalarwherewithaggregatesinputSchema;
