import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  city: z.literal(true).optional(),
  state: z.literal(true).optional(),
  collegeType: z.literal(true).optional(),
  logoUrl: z.literal(true).optional(),
  websiteUrl: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  country: z.literal(true).optional(),
  accrediation: z.literal(true).optional(),
  address: z.literal(true).optional(),
  affiliatedUniversity: z.literal(true).optional(),
  deletedAt: z.literal(true).optional(),
  establisedYear: z.literal(true).optional(),
  latitude: z.literal(true).optional(),
  longitude: z.literal(true).optional(),
  officialEmail: z.literal(true).optional(),
  phone: z.literal(true).optional(),
  pincode: z.literal(true).optional(),
  regitrationNumber: z.literal(true).optional(),
  verificationNote: z.literal(true).optional(),
  verififedTime: z.literal(true).optional(),
  verified: z.literal(true).optional()
}).strict();
export const CollegeMaxAggregateInputObjectSchema: z.ZodType<Prisma.CollegeMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CollegeMaxAggregateInputType>;
export const CollegeMaxAggregateInputObjectZodSchema = makeSchema();
