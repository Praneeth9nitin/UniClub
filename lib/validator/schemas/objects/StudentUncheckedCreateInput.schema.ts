import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationsUncheckedCreateNestedManyWithoutStudentInputObjectSchema as RegistrationsUncheckedCreateNestedManyWithoutStudentInputObjectSchema } from './RegistrationsUncheckedCreateNestedManyWithoutStudentInput.schema';
import { StudentInClubUncheckedCreateNestedManyWithoutStudentInputObjectSchema as StudentInClubUncheckedCreateNestedManyWithoutStudentInputObjectSchema } from './StudentInClubUncheckedCreateNestedManyWithoutStudentInput.schema';
import { CollegeUncheckedCreateNestedManyWithoutFollowersInputObjectSchema as CollegeUncheckedCreateNestedManyWithoutFollowersInputObjectSchema } from './CollegeUncheckedCreateNestedManyWithoutFollowersInput.schema';
import { ClubUncheckedCreateNestedManyWithoutFollowersInputObjectSchema as ClubUncheckedCreateNestedManyWithoutFollowersInputObjectSchema } from './ClubUncheckedCreateNestedManyWithoutFollowersInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  password: z.string(),
  rollnumber: z.string().optional().nullable(),
  collegeId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  registrations: z.lazy(() => RegistrationsUncheckedCreateNestedManyWithoutStudentInputObjectSchema).optional(),
  clubs: z.lazy(() => StudentInClubUncheckedCreateNestedManyWithoutStudentInputObjectSchema).optional(),
  follows: z.lazy(() => CollegeUncheckedCreateNestedManyWithoutFollowersInputObjectSchema).optional(),
  followsClub: z.lazy(() => ClubUncheckedCreateNestedManyWithoutFollowersInputObjectSchema).optional()
}).strict();
export const StudentUncheckedCreateInputObjectSchema: z.ZodType<Prisma.StudentUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUncheckedCreateInput>;
export const StudentUncheckedCreateInputObjectZodSchema = makeSchema();
