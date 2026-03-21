import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CollegeCountOrderByAggregateInputObjectSchema as CollegeCountOrderByAggregateInputObjectSchema } from './CollegeCountOrderByAggregateInput.schema';
import { CollegeAvgOrderByAggregateInputObjectSchema as CollegeAvgOrderByAggregateInputObjectSchema } from './CollegeAvgOrderByAggregateInput.schema';
import { CollegeMaxOrderByAggregateInputObjectSchema as CollegeMaxOrderByAggregateInputObjectSchema } from './CollegeMaxOrderByAggregateInput.schema';
import { CollegeMinOrderByAggregateInputObjectSchema as CollegeMinOrderByAggregateInputObjectSchema } from './CollegeMinOrderByAggregateInput.schema';
import { CollegeSumOrderByAggregateInputObjectSchema as CollegeSumOrderByAggregateInputObjectSchema } from './CollegeSumOrderByAggregateInput.schema'

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
  _count: z.lazy(() => CollegeCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => CollegeAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CollegeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CollegeMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => CollegeSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CollegeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CollegeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeOrderByWithAggregationInput>;
export const CollegeOrderByWithAggregationInputObjectZodSchema = makeSchema();
