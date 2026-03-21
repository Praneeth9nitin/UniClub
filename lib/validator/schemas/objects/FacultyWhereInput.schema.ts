import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { ClubListRelationFilterObjectSchema as ClubListRelationFilterObjectSchema } from './ClubListRelationFilter.schema';
import { CollegeScalarRelationFilterObjectSchema as CollegeScalarRelationFilterObjectSchema } from './CollegeScalarRelationFilter.schema';
import { CollegeWhereInputObjectSchema as CollegeWhereInputObjectSchema } from './CollegeWhereInput.schema'

const facultywhereinputSchema = z.object({
  AND: z.union([z.lazy(() => FacultyWhereInputObjectSchema), z.lazy(() => FacultyWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FacultyWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FacultyWhereInputObjectSchema), z.lazy(() => FacultyWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  collegeId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  password: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  club: z.lazy(() => ClubListRelationFilterObjectSchema).optional(),
  college: z.union([z.lazy(() => CollegeScalarRelationFilterObjectSchema), z.lazy(() => CollegeWhereInputObjectSchema)]).optional()
}).strict();
export const FacultyWhereInputObjectSchema: z.ZodType<Prisma.FacultyWhereInput> = facultywhereinputSchema as unknown as z.ZodType<Prisma.FacultyWhereInput>;
export const FacultyWhereInputObjectZodSchema = facultywhereinputSchema;
