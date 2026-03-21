import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { CollegeScalarRelationFilterObjectSchema as CollegeScalarRelationFilterObjectSchema } from './CollegeScalarRelationFilter.schema';
import { CollegeWhereInputObjectSchema as CollegeWhereInputObjectSchema } from './CollegeWhereInput.schema';
import { FacultyNullableScalarRelationFilterObjectSchema as FacultyNullableScalarRelationFilterObjectSchema } from './FacultyNullableScalarRelationFilter.schema';
import { FacultyWhereInputObjectSchema as FacultyWhereInputObjectSchema } from './FacultyWhereInput.schema';
import { EventListRelationFilterObjectSchema as EventListRelationFilterObjectSchema } from './EventListRelationFilter.schema';
import { RoleInClubListRelationFilterObjectSchema as RoleInClubListRelationFilterObjectSchema } from './RoleInClubListRelationFilter.schema';
import { StudentInClubListRelationFilterObjectSchema as StudentInClubListRelationFilterObjectSchema } from './StudentInClubListRelationFilter.schema';
import { ClubAdminNullableScalarRelationFilterObjectSchema as ClubAdminNullableScalarRelationFilterObjectSchema } from './ClubAdminNullableScalarRelationFilter.schema';
import { clubAdminWhereInputObjectSchema as clubAdminWhereInputObjectSchema } from './clubAdminWhereInput.schema';
import { StudentListRelationFilterObjectSchema as StudentListRelationFilterObjectSchema } from './StudentListRelationFilter.schema'

const clubwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ClubWhereInputObjectSchema), z.lazy(() => ClubWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ClubWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ClubWhereInputObjectSchema), z.lazy(() => ClubWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  collegeId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  cordinatorId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  onHold: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  category: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  logoUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  instagramUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  twitterUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  linkedinUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  youtubeUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  websiteUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  college: z.union([z.lazy(() => CollegeScalarRelationFilterObjectSchema), z.lazy(() => CollegeWhereInputObjectSchema)]).optional(),
  coordinator: z.union([z.lazy(() => FacultyNullableScalarRelationFilterObjectSchema), z.lazy(() => FacultyWhereInputObjectSchema)]).optional(),
  events: z.lazy(() => EventListRelationFilterObjectSchema).optional(),
  role: z.lazy(() => RoleInClubListRelationFilterObjectSchema).optional(),
  students: z.lazy(() => StudentInClubListRelationFilterObjectSchema).optional(),
  clubAdmin: z.union([z.lazy(() => ClubAdminNullableScalarRelationFilterObjectSchema), z.lazy(() => clubAdminWhereInputObjectSchema)]).optional(),
  followers: z.lazy(() => StudentListRelationFilterObjectSchema).optional()
}).strict();
export const ClubWhereInputObjectSchema: z.ZodType<Prisma.ClubWhereInput> = clubwhereinputSchema as unknown as z.ZodType<Prisma.ClubWhereInput>;
export const ClubWhereInputObjectZodSchema = clubwhereinputSchema;
