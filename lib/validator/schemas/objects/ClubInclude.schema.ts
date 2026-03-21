import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeArgsObjectSchema as CollegeArgsObjectSchema } from './CollegeArgs.schema';
import { FacultyArgsObjectSchema as FacultyArgsObjectSchema } from './FacultyArgs.schema';
import { EventFindManySchema as EventFindManySchema } from '../findManyEvent.schema';
import { RoleInClubFindManySchema as RoleInClubFindManySchema } from '../findManyRoleInClub.schema';
import { StudentInClubFindManySchema as StudentInClubFindManySchema } from '../findManyStudentInClub.schema';
import { clubAdminArgsObjectSchema as clubAdminArgsObjectSchema } from './clubAdminArgs.schema';
import { StudentFindManySchema as StudentFindManySchema } from '../findManyStudent.schema';
import { ClubCountOutputTypeArgsObjectSchema as ClubCountOutputTypeArgsObjectSchema } from './ClubCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  college: z.union([z.boolean(), z.lazy(() => CollegeArgsObjectSchema)]).optional(),
  coordinator: z.union([z.boolean(), z.lazy(() => FacultyArgsObjectSchema)]).optional(),
  events: z.union([z.boolean(), z.lazy(() => EventFindManySchema)]).optional(),
  role: z.union([z.boolean(), z.lazy(() => RoleInClubFindManySchema)]).optional(),
  students: z.union([z.boolean(), z.lazy(() => StudentInClubFindManySchema)]).optional(),
  clubAdmin: z.union([z.boolean(), z.lazy(() => clubAdminArgsObjectSchema)]).optional(),
  followers: z.union([z.boolean(), z.lazy(() => StudentFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ClubCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ClubIncludeObjectSchema: z.ZodType<Prisma.ClubInclude> = makeSchema() as unknown as z.ZodType<Prisma.ClubInclude>;
export const ClubIncludeObjectZodSchema = makeSchema();
