import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumCollegeTypeNullableWithAggregatesFilterObjectSchema as EnumCollegeTypeNullableWithAggregatesFilterObjectSchema } from './EnumCollegeTypeNullableWithAggregatesFilter.schema';
import { CollegeTypeSchema } from '../enums/CollegeType.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { EnumVerificationStatusWithAggregatesFilterObjectSchema as EnumVerificationStatusWithAggregatesFilterObjectSchema } from './EnumVerificationStatusWithAggregatesFilter.schema';
import { VerificationStatusSchema } from '../enums/VerificationStatus.schema'

const collegescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CollegeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CollegeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CollegeScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CollegeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CollegeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  city: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  state: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  collegeType: z.union([z.lazy(() => EnumCollegeTypeNullableWithAggregatesFilterObjectSchema), CollegeTypeSchema]).optional().nullable(),
  logoUrl: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  websiteUrl: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  country: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  accrediation: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  address: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  affiliatedUniversity: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  establisedYear: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  latitude: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  longitude: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  officialEmail: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  phone: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  pincode: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  regitrationNumber: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  verificationNote: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  verififedTime: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  verified: z.union([z.lazy(() => EnumVerificationStatusWithAggregatesFilterObjectSchema), VerificationStatusSchema]).optional()
}).strict();
export const CollegeScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CollegeScalarWhereWithAggregatesInput> = collegescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CollegeScalarWhereWithAggregatesInput>;
export const CollegeScalarWhereWithAggregatesInputObjectZodSchema = collegescalarwherewithaggregatesinputSchema;
