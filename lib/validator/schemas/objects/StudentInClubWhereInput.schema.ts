import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumstatusFilterObjectSchema as EnumstatusFilterObjectSchema } from './EnumstatusFilter.schema';
import { statusSchema } from '../enums/status.schema';
import { ClubScalarRelationFilterObjectSchema as ClubScalarRelationFilterObjectSchema } from './ClubScalarRelationFilter.schema';
import { ClubWhereInputObjectSchema as ClubWhereInputObjectSchema } from './ClubWhereInput.schema';
import { RoleInClubScalarRelationFilterObjectSchema as RoleInClubScalarRelationFilterObjectSchema } from './RoleInClubScalarRelationFilter.schema';
import { RoleInClubWhereInputObjectSchema as RoleInClubWhereInputObjectSchema } from './RoleInClubWhereInput.schema';
import { StudentScalarRelationFilterObjectSchema as StudentScalarRelationFilterObjectSchema } from './StudentScalarRelationFilter.schema';
import { StudentWhereInputObjectSchema as StudentWhereInputObjectSchema } from './StudentWhereInput.schema'

const studentinclubwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => StudentInClubWhereInputObjectSchema), z.lazy(() => StudentInClubWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StudentInClubWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StudentInClubWhereInputObjectSchema), z.lazy(() => StudentInClubWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  clubId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  studentId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  roleId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => EnumstatusFilterObjectSchema), statusSchema]).optional(),
  club: z.union([z.lazy(() => ClubScalarRelationFilterObjectSchema), z.lazy(() => ClubWhereInputObjectSchema)]).optional(),
  role: z.union([z.lazy(() => RoleInClubScalarRelationFilterObjectSchema), z.lazy(() => RoleInClubWhereInputObjectSchema)]).optional(),
  student: z.union([z.lazy(() => StudentScalarRelationFilterObjectSchema), z.lazy(() => StudentWhereInputObjectSchema)]).optional()
}).strict();
export const StudentInClubWhereInputObjectSchema: z.ZodType<Prisma.StudentInClubWhereInput> = studentinclubwhereinputSchema as unknown as z.ZodType<Prisma.StudentInClubWhereInput>;
export const StudentInClubWhereInputObjectZodSchema = studentinclubwhereinputSchema;
