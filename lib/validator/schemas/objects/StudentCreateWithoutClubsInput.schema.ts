import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationsCreateNestedManyWithoutStudentInputObjectSchema as RegistrationsCreateNestedManyWithoutStudentInputObjectSchema } from './RegistrationsCreateNestedManyWithoutStudentInput.schema';
import { CollegeCreateNestedOneWithoutStudentsInputObjectSchema as CollegeCreateNestedOneWithoutStudentsInputObjectSchema } from './CollegeCreateNestedOneWithoutStudentsInput.schema';
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
  registrations: z.lazy(() => RegistrationsCreateNestedManyWithoutStudentInputObjectSchema).optional(),
  college: z.lazy(() => CollegeCreateNestedOneWithoutStudentsInputObjectSchema).optional(),
  follows: z.lazy(() => CollegeCreateNestedManyWithoutFollowersInputObjectSchema).optional(),
  followsClub: z.lazy(() => ClubCreateNestedManyWithoutFollowersInputObjectSchema).optional()
}).strict();
export const StudentCreateWithoutClubsInputObjectSchema: z.ZodType<Prisma.StudentCreateWithoutClubsInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentCreateWithoutClubsInput>;
export const StudentCreateWithoutClubsInputObjectZodSchema = makeSchema();
