import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeTypeSchema } from '../enums/CollegeType.schema';
import { VerificationStatusSchema } from '../enums/VerificationStatus.schema';
import { ClubUncheckedCreateNestedManyWithoutCollegeInputObjectSchema as ClubUncheckedCreateNestedManyWithoutCollegeInputObjectSchema } from './ClubUncheckedCreateNestedManyWithoutCollegeInput.schema';
import { CollegeAdminUncheckedCreateNestedOneWithoutCollegeInputObjectSchema as CollegeAdminUncheckedCreateNestedOneWithoutCollegeInputObjectSchema } from './CollegeAdminUncheckedCreateNestedOneWithoutCollegeInput.schema';
import { FacultyUncheckedCreateNestedManyWithoutCollegeInputObjectSchema as FacultyUncheckedCreateNestedManyWithoutCollegeInputObjectSchema } from './FacultyUncheckedCreateNestedManyWithoutCollegeInput.schema';
import { StudentUncheckedCreateNestedManyWithoutFollowsInputObjectSchema as StudentUncheckedCreateNestedManyWithoutFollowsInputObjectSchema } from './StudentUncheckedCreateNestedManyWithoutFollowsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  city: z.string(),
  state: z.string(),
  collegeType: CollegeTypeSchema.optional().nullable(),
  logoUrl: z.string().optional().nullable(),
  websiteUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  country: z.string().optional(),
  accrediation: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  affiliatedUniversity: z.string().optional().nullable(),
  deletedAt: z.coerce.date().optional().nullable(),
  establisedYear: z.number().int().optional().nullable(),
  latitude: z.string().optional().nullable(),
  longitude: z.string().optional().nullable(),
  officialEmail: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  pincode: z.string().optional().nullable(),
  regitrationNumber: z.string().optional().nullable(),
  verificationNote: z.string().optional().nullable(),
  verififedTime: z.coerce.date().optional().nullable(),
  verified: VerificationStatusSchema.optional(),
  clubs: z.lazy(() => ClubUncheckedCreateNestedManyWithoutCollegeInputObjectSchema).optional(),
  admin: z.lazy(() => CollegeAdminUncheckedCreateNestedOneWithoutCollegeInputObjectSchema).optional(),
  faculty: z.lazy(() => FacultyUncheckedCreateNestedManyWithoutCollegeInputObjectSchema).optional(),
  followers: z.lazy(() => StudentUncheckedCreateNestedManyWithoutFollowsInputObjectSchema).optional()
}).strict();
export const CollegeUncheckedCreateWithoutStudentsInputObjectSchema: z.ZodType<Prisma.CollegeUncheckedCreateWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeUncheckedCreateWithoutStudentsInput>;
export const CollegeUncheckedCreateWithoutStudentsInputObjectZodSchema = makeSchema();
