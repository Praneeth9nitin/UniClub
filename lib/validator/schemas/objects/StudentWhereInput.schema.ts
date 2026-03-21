import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { RegistrationsListRelationFilterObjectSchema as RegistrationsListRelationFilterObjectSchema } from './RegistrationsListRelationFilter.schema';
import { CollegeNullableScalarRelationFilterObjectSchema as CollegeNullableScalarRelationFilterObjectSchema } from './CollegeNullableScalarRelationFilter.schema';
import { CollegeWhereInputObjectSchema as CollegeWhereInputObjectSchema } from './CollegeWhereInput.schema';
import { StudentInClubListRelationFilterObjectSchema as StudentInClubListRelationFilterObjectSchema } from './StudentInClubListRelationFilter.schema';
import { CollegeListRelationFilterObjectSchema as CollegeListRelationFilterObjectSchema } from './CollegeListRelationFilter.schema';
import { ClubListRelationFilterObjectSchema as ClubListRelationFilterObjectSchema } from './ClubListRelationFilter.schema'

const studentwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => StudentWhereInputObjectSchema), z.lazy(() => StudentWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StudentWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StudentWhereInputObjectSchema), z.lazy(() => StudentWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  firstName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  lastName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  password: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  rollnumber: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  collegeId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  registrations: z.lazy(() => RegistrationsListRelationFilterObjectSchema).optional(),
  college: z.union([z.lazy(() => CollegeNullableScalarRelationFilterObjectSchema), z.lazy(() => CollegeWhereInputObjectSchema)]).optional(),
  clubs: z.lazy(() => StudentInClubListRelationFilterObjectSchema).optional(),
  follows: z.lazy(() => CollegeListRelationFilterObjectSchema).optional(),
  followsClub: z.lazy(() => ClubListRelationFilterObjectSchema).optional()
}).strict();
export const StudentWhereInputObjectSchema: z.ZodType<Prisma.StudentWhereInput> = studentwhereinputSchema as unknown as z.ZodType<Prisma.StudentWhereInput>;
export const StudentWhereInputObjectZodSchema = studentwhereinputSchema;
