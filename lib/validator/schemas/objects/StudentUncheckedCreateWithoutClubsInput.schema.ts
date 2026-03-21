import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationsUncheckedCreateNestedManyWithoutStudentInputObjectSchema as RegistrationsUncheckedCreateNestedManyWithoutStudentInputObjectSchema } from './RegistrationsUncheckedCreateNestedManyWithoutStudentInput.schema';
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
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  registrations: z.lazy(() => RegistrationsUncheckedCreateNestedManyWithoutStudentInputObjectSchema).optional(),
  follows: z.lazy(() => CollegeUncheckedCreateNestedManyWithoutFollowersInputObjectSchema).optional(),
  followsClub: z.lazy(() => ClubUncheckedCreateNestedManyWithoutFollowersInputObjectSchema).optional()
}).strict();
export const StudentUncheckedCreateWithoutClubsInputObjectSchema: z.ZodType<Prisma.StudentUncheckedCreateWithoutClubsInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUncheckedCreateWithoutClubsInput>;
export const StudentUncheckedCreateWithoutClubsInputObjectZodSchema = makeSchema();
