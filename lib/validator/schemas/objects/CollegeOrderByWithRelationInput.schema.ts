import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ClubOrderByRelationAggregateInputObjectSchema as ClubOrderByRelationAggregateInputObjectSchema } from './ClubOrderByRelationAggregateInput.schema';
import { CollegeAdminOrderByWithRelationInputObjectSchema as CollegeAdminOrderByWithRelationInputObjectSchema } from './CollegeAdminOrderByWithRelationInput.schema';
import { FacultyOrderByRelationAggregateInputObjectSchema as FacultyOrderByRelationAggregateInputObjectSchema } from './FacultyOrderByRelationAggregateInput.schema';
import { StudentOrderByRelationAggregateInputObjectSchema as StudentOrderByRelationAggregateInputObjectSchema } from './StudentOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  city: SortOrderSchema.optional(),
  state: SortOrderSchema.optional(),
  collegeType: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  logoUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  websiteUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  country: SortOrderSchema.optional(),
  accrediation: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  address: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  affiliatedUniversity: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  establisedYear: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  latitude: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  longitude: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  officialEmail: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  phone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  pincode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  regitrationNumber: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  verificationNote: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  verififedTime: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  verified: SortOrderSchema.optional(),
  clubs: z.lazy(() => ClubOrderByRelationAggregateInputObjectSchema).optional(),
  admin: z.lazy(() => CollegeAdminOrderByWithRelationInputObjectSchema).optional(),
  faculty: z.lazy(() => FacultyOrderByRelationAggregateInputObjectSchema).optional(),
  students: z.lazy(() => StudentOrderByRelationAggregateInputObjectSchema).optional(),
  followers: z.lazy(() => StudentOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const CollegeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CollegeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeOrderByWithRelationInput>;
export const CollegeOrderByWithRelationInputObjectZodSchema = makeSchema();
