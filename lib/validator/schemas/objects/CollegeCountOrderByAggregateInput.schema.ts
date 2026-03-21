import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  city: SortOrderSchema.optional(),
  state: SortOrderSchema.optional(),
  collegeType: SortOrderSchema.optional(),
  logoUrl: SortOrderSchema.optional(),
  websiteUrl: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  country: SortOrderSchema.optional(),
  accrediation: SortOrderSchema.optional(),
  address: SortOrderSchema.optional(),
  affiliatedUniversity: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional(),
  establisedYear: SortOrderSchema.optional(),
  latitude: SortOrderSchema.optional(),
  longitude: SortOrderSchema.optional(),
  officialEmail: SortOrderSchema.optional(),
  phone: SortOrderSchema.optional(),
  pincode: SortOrderSchema.optional(),
  regitrationNumber: SortOrderSchema.optional(),
  verificationNote: SortOrderSchema.optional(),
  verififedTime: SortOrderSchema.optional(),
  verified: SortOrderSchema.optional()
}).strict();
export const CollegeCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CollegeCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeCountOrderByAggregateInput>;
export const CollegeCountOrderByAggregateInputObjectZodSchema = makeSchema();
