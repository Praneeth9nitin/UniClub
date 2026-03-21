import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeCreateNestedOneWithoutStudentsInputObjectSchema as CollegeCreateNestedOneWithoutStudentsInputObjectSchema } from './CollegeCreateNestedOneWithoutStudentsInput.schema';
import { StudentInClubCreateNestedManyWithoutStudentInputObjectSchema as StudentInClubCreateNestedManyWithoutStudentInputObjectSchema } from './StudentInClubCreateNestedManyWithoutStudentInput.schema';
import { CollegeCreateNestedManyWithoutFollowersInputObjectSchema as CollegeCreateNestedManyWithoutFollowersInputObjectSchema } from './CollegeCreateNestedManyWithoutFollowersInput.schema';
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
  college: z.lazy(() => CollegeCreateNestedOneWithoutStudentsInputObjectSchema).optional(),
  clubs: z.lazy(() => StudentInClubCreateNestedManyWithoutStudentInputObjectSchema).optional(),
  follows: z.lazy(() => CollegeCreateNestedManyWithoutFollowersInputObjectSchema).optional(),
  followsClub: z.lazy(() => ClubCreateNestedManyWithoutFollowersInputObjectSchema).optional()
}).strict();
export const StudentCreateWithoutRegistrationsInputObjectSchema: z.ZodType<Prisma.StudentCreateWithoutRegistrationsInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentCreateWithoutRegistrationsInput>;
export const StudentCreateWithoutRegistrationsInputObjectZodSchema = makeSchema();
