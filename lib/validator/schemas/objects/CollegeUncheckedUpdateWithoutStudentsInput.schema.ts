import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { CollegeTypeSchema } from '../enums/CollegeType.schema';
import { NullableEnumCollegeTypeFieldUpdateOperationsInputObjectSchema as NullableEnumCollegeTypeFieldUpdateOperationsInputObjectSchema } from './NullableEnumCollegeTypeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { VerificationStatusSchema } from '../enums/VerificationStatus.schema';
import { EnumVerificationStatusFieldUpdateOperationsInputObjectSchema as EnumVerificationStatusFieldUpdateOperationsInputObjectSchema } from './EnumVerificationStatusFieldUpdateOperationsInput.schema';
import { ClubUncheckedUpdateManyWithoutCollegeNestedInputObjectSchema as ClubUncheckedUpdateManyWithoutCollegeNestedInputObjectSchema } from './ClubUncheckedUpdateManyWithoutCollegeNestedInput.schema';
import { CollegeAdminUncheckedUpdateOneWithoutCollegeNestedInputObjectSchema as CollegeAdminUncheckedUpdateOneWithoutCollegeNestedInputObjectSchema } from './CollegeAdminUncheckedUpdateOneWithoutCollegeNestedInput.schema';
import { FacultyUncheckedUpdateManyWithoutCollegeNestedInputObjectSchema as FacultyUncheckedUpdateManyWithoutCollegeNestedInputObjectSchema } from './FacultyUncheckedUpdateManyWithoutCollegeNestedInput.schema';
import { StudentUncheckedUpdateManyWithoutFollowsNestedInputObjectSchema as StudentUncheckedUpdateManyWithoutFollowsNestedInputObjectSchema } from './StudentUncheckedUpdateManyWithoutFollowsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  city: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  state: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  collegeType: z.union([CollegeTypeSchema, z.lazy(() => NullableEnumCollegeTypeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  logoUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  websiteUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  country: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  accrediation: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  address: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  affiliatedUniversity: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  establisedYear: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  latitude: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  longitude: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  officialEmail: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  phone: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  pincode: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  regitrationNumber: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  verificationNote: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  verififedTime: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  verified: z.union([VerificationStatusSchema, z.lazy(() => EnumVerificationStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  clubs: z.lazy(() => ClubUncheckedUpdateManyWithoutCollegeNestedInputObjectSchema).optional(),
  admin: z.lazy(() => CollegeAdminUncheckedUpdateOneWithoutCollegeNestedInputObjectSchema).optional(),
  faculty: z.lazy(() => FacultyUncheckedUpdateManyWithoutCollegeNestedInputObjectSchema).optional(),
  followers: z.lazy(() => StudentUncheckedUpdateManyWithoutFollowsNestedInputObjectSchema).optional()
}).strict();
export const CollegeUncheckedUpdateWithoutStudentsInputObjectSchema: z.ZodType<Prisma.CollegeUncheckedUpdateWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeUncheckedUpdateWithoutStudentsInput>;
export const CollegeUncheckedUpdateWithoutStudentsInputObjectZodSchema = makeSchema();
