import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubFindManySchema as ClubFindManySchema } from '../findManyClub.schema';
import { CollegeAdminArgsObjectSchema as CollegeAdminArgsObjectSchema } from './CollegeAdminArgs.schema';
import { FacultyFindManySchema as FacultyFindManySchema } from '../findManyFaculty.schema';
import { StudentFindManySchema as StudentFindManySchema } from '../findManyStudent.schema';
import { CollegeCountOutputTypeArgsObjectSchema as CollegeCountOutputTypeArgsObjectSchema } from './CollegeCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  clubs: z.union([z.boolean(), z.lazy(() => ClubFindManySchema)]).optional(),
  admin: z.union([z.boolean(), z.lazy(() => CollegeAdminArgsObjectSchema)]).optional(),
  faculty: z.union([z.boolean(), z.lazy(() => FacultyFindManySchema)]).optional(),
  students: z.union([z.boolean(), z.lazy(() => StudentFindManySchema)]).optional(),
  followers: z.union([z.boolean(), z.lazy(() => StudentFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CollegeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CollegeIncludeObjectSchema: z.ZodType<Prisma.CollegeInclude> = makeSchema() as unknown as z.ZodType<Prisma.CollegeInclude>;
export const CollegeIncludeObjectZodSchema = makeSchema();
