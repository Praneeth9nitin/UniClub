import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationsCreateNestedManyWithoutStudentInputObjectSchema as RegistrationsCreateNestedManyWithoutStudentInputObjectSchema } from './RegistrationsCreateNestedManyWithoutStudentInput.schema';
import { CollegeCreateNestedOneWithoutStudentsInputObjectSchema as CollegeCreateNestedOneWithoutStudentsInputObjectSchema } from './CollegeCreateNestedOneWithoutStudentsInput.schema';
import { StudentInClubCreateNestedManyWithoutStudentInputObjectSchema as StudentInClubCreateNestedManyWithoutStudentInputObjectSchema } from './StudentInClubCreateNestedManyWithoutStudentInput.schema';
import { CollegeCreateNestedManyWithoutFollowersInputObjectSchema as CollegeCreateNestedManyWithoutFollowersInputObjectSchema } from './CollegeCreateNestedManyWithoutFollowersInput.schema'

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
  follows: z.lazy(() => CollegeCreateNestedManyWithoutFollowersInputObjectSchema).optional()
}).strict();
export const StudentCreateWithoutFollowsClubInputObjectSchema: z.ZodType<Prisma.StudentCreateWithoutFollowsClubInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentCreateWithoutFollowsClubInput>;
export const StudentCreateWithoutFollowsClubInputObjectZodSchema = makeSchema();
