import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeTypeSchema } from '../enums/CollegeType.schema';
import { VerificationStatusSchema } from '../enums/VerificationStatus.schema'

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
  verified: VerificationStatusSchema.optional()
}).strict();
export const CollegeCreateManyInputObjectSchema: z.ZodType<Prisma.CollegeCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeCreateManyInput>;
export const CollegeCreateManyInputObjectZodSchema = makeSchema();
