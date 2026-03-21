import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationsCreateNestedManyWithoutStudentInputObjectSchema as RegistrationsCreateNestedManyWithoutStudentInputObjectSchema } from './RegistrationsCreateNestedManyWithoutStudentInput.schema';
import { CollegeCreateNestedOneWithoutStudentsInputObjectSchema as CollegeCreateNestedOneWithoutStudentsInputObjectSchema } from './CollegeCreateNestedOneWithoutStudentsInput.schema';
import { StudentInClubCreateNestedManyWithoutStudentInputObjectSchema as StudentInClubCreateNestedManyWithoutStudentInputObjectSchema } from './StudentInClubCreateNestedManyWithoutStudentInput.schema';
import { ClubCreateNestedManyWithoutFollowersInputObjectSchema as ClubCreateNestedManyWithoutFollowersInputObjectSchema } from './ClubCreateNestedManyWithoutFollowersInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  password: z.string(),
  rollnumber: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  registrations: z.lazy(() => RegistrationsCreateNestedManyWithoutStudentInputObjectSchema).optional(),
  college: z.lazy(() => CollegeCreateNestedOneWithoutStudentsInputObjectSchema).optional(),
  clubs: z.lazy(() => StudentInClubCreateNestedManyWithoutStudentInputObjectSchema).optional(),
  followsClub: z.lazy(() => ClubCreateNestedManyWithoutFollowersInputObjectSchema).optional()
}).strict();
export const StudentCreateWithoutFollowsInputObjectSchema: z.ZodType<Prisma.StudentCreateWithoutFollowsInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentCreateWithoutFollowsInput>;
export const StudentCreateWithoutFollowsInputObjectZodSchema = makeSchema();
