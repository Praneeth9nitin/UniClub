import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const facultyscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => FacultyScalarWhereInputObjectSchema), z.lazy(() => FacultyScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FacultyScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FacultyScalarWhereInputObjectSchema), z.lazy(() => FacultyScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  collegeId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  password: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const FacultyScalarWhereInputObjectSchema: z.ZodType<Prisma.FacultyScalarWhereInput> = facultyscalarwhereinputSchema as unknown as z.ZodType<Prisma.FacultyScalarWhereInput>;
export const FacultyScalarWhereInputObjectZodSchema = facultyscalarwhereinputSchema;
