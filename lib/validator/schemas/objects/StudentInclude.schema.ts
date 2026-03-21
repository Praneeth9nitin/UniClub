import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationsFindManySchema as RegistrationsFindManySchema } from '../findManyRegistrations.schema';
import { CollegeArgsObjectSchema as CollegeArgsObjectSchema } from './CollegeArgs.schema';
import { StudentInClubFindManySchema as StudentInClubFindManySchema } from '../findManyStudentInClub.schema';
import { CollegeFindManySchema as CollegeFindManySchema } from '../findManyCollege.schema';
import { ClubFindManySchema as ClubFindManySchema } from '../findManyClub.schema';
import { StudentCountOutputTypeArgsObjectSchema as StudentCountOutputTypeArgsObjectSchema } from './StudentCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  registrations: z.union([z.boolean(), z.lazy(() => RegistrationsFindManySchema)]).optional(),
  college: z.union([z.boolean(), z.lazy(() => CollegeArgsObjectSchema)]).optional(),
  clubs: z.union([z.boolean(), z.lazy(() => StudentInClubFindManySchema)]).optional(),
  follows: z.union([z.boolean(), z.lazy(() => CollegeFindManySchema)]).optional(),
  followsClub: z.union([z.boolean(), z.lazy(() => ClubFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => StudentCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const StudentIncludeObjectSchema: z.ZodType<Prisma.StudentInclude> = makeSchema() as unknown as z.ZodType<Prisma.StudentInclude>;
export const StudentIncludeObjectZodSchema = makeSchema();
