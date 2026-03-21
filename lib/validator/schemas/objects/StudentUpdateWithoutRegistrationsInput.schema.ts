import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { CollegeUpdateOneWithoutStudentsNestedInputObjectSchema as CollegeUpdateOneWithoutStudentsNestedInputObjectSchema } from './CollegeUpdateOneWithoutStudentsNestedInput.schema';
import { StudentInClubUpdateManyWithoutStudentNestedInputObjectSchema as StudentInClubUpdateManyWithoutStudentNestedInputObjectSchema } from './StudentInClubUpdateManyWithoutStudentNestedInput.schema';
import { CollegeUpdateManyWithoutFollowersNestedInputObjectSchema as CollegeUpdateManyWithoutFollowersNestedInputObjectSchema } from './CollegeUpdateManyWithoutFollowersNestedInput.schema';
import { ClubUpdateManyWithoutFollowersNestedInputObjectSchema as ClubUpdateManyWithoutFollowersNestedInputObjectSchema } from './ClubUpdateManyWithoutFollowersNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  rollnumber: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  college: z.lazy(() => CollegeUpdateOneWithoutStudentsNestedInputObjectSchema).optional(),
  clubs: z.lazy(() => StudentInClubUpdateManyWithoutStudentNestedInputObjectSchema).optional(),
  follows: z.lazy(() => CollegeUpdateManyWithoutFollowersNestedInputObjectSchema).optional(),
  followsClub: z.lazy(() => ClubUpdateManyWithoutFollowersNestedInputObjectSchema).optional()
}).strict();
export const StudentUpdateWithoutRegistrationsInputObjectSchema: z.ZodType<Prisma.StudentUpdateWithoutRegistrationsInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUpdateWithoutRegistrationsInput>;
export const StudentUpdateWithoutRegistrationsInputObjectZodSchema = makeSchema();
