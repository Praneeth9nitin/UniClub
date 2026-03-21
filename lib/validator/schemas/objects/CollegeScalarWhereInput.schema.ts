import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumCollegeTypeNullableFilterObjectSchema as EnumCollegeTypeNullableFilterObjectSchema } from './EnumCollegeTypeNullableFilter.schema';
import { CollegeTypeSchema } from '../enums/CollegeType.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { EnumVerificationStatusFilterObjectSchema as EnumVerificationStatusFilterObjectSchema } from './EnumVerificationStatusFilter.schema';
import { VerificationStatusSchema } from '../enums/VerificationStatus.schema'

const collegescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CollegeScalarWhereInputObjectSchema), z.lazy(() => CollegeScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CollegeScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CollegeScalarWhereInputObjectSchema), z.lazy(() => CollegeScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  city: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  state: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  collegeType: z.union([z.lazy(() => EnumCollegeTypeNullableFilterObjectSchema), CollegeTypeSchema]).optional().nullable(),
  logoUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  websiteUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  country: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  accrediation: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  address: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  affiliatedUniversity: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  establisedYear: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  latitude: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  longitude: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  officialEmail: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  phone: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  pincode: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  regitrationNumber: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  verificationNote: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  verififedTime: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  verified: z.union([z.lazy(() => EnumVerificationStatusFilterObjectSchema), VerificationStatusSchema]).optional()
}).strict();
export const CollegeScalarWhereInputObjectSchema: z.ZodType<Prisma.CollegeScalarWhereInput> = collegescalarwhereinputSchema as unknown as z.ZodType<Prisma.CollegeScalarWhereInput>;
export const CollegeScalarWhereInputObjectZodSchema = collegescalarwhereinputSchema;
