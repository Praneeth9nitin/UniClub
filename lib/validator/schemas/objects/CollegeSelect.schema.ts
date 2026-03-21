import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubFindManySchema as ClubFindManySchema } from '../findManyClub.schema';
import { CollegeAdminArgsObjectSchema as CollegeAdminArgsObjectSchema } from './CollegeAdminArgs.schema';
import { FacultyFindManySchema as FacultyFindManySchema } from '../findManyFaculty.schema';
import { StudentFindManySchema as StudentFindManySchema } from '../findManyStudent.schema';
import { CollegeCountOutputTypeArgsObjectSchema as CollegeCountOutputTypeArgsObjectSchema } from './CollegeCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  city: z.boolean().optional(),
  state: z.boolean().optional(),
  collegeType: z.boolean().optional(),
  logoUrl: z.boolean().optional(),
  websiteUrl: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  country: z.boolean().optional(),
  accrediation: z.boolean().optional(),
  address: z.boolean().optional(),
  affiliatedUniversity: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  establisedYear: z.boolean().optional(),
  latitude: z.boolean().optional(),
  longitude: z.boolean().optional(),
  officialEmail: z.boolean().optional(),
  phone: z.boolean().optional(),
  pincode: z.boolean().optional(),
  regitrationNumber: z.boolean().optional(),
  verificationNote: z.boolean().optional(),
  verififedTime: z.boolean().optional(),
  verified: z.boolean().optional(),
  clubs: z.union([z.boolean(), z.lazy(() => ClubFindManySchema)]).optional(),
  admin: z.union([z.boolean(), z.lazy(() => CollegeAdminArgsObjectSchema)]).optional(),
  faculty: z.union([z.boolean(), z.lazy(() => FacultyFindManySchema)]).optional(),
  students: z.union([z.boolean(), z.lazy(() => StudentFindManySchema)]).optional(),
  followers: z.union([z.boolean(), z.lazy(() => StudentFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CollegeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CollegeSelectObjectSchema: z.ZodType<Prisma.CollegeSelect> = makeSchema() as unknown as z.ZodType<Prisma.CollegeSelect>;
export const CollegeSelectObjectZodSchema = makeSchema();
