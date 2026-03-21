import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ClubCountOrderByAggregateInputObjectSchema as ClubCountOrderByAggregateInputObjectSchema } from './ClubCountOrderByAggregateInput.schema';
import { ClubMaxOrderByAggregateInputObjectSchema as ClubMaxOrderByAggregateInputObjectSchema } from './ClubMaxOrderByAggregateInput.schema';
import { ClubMinOrderByAggregateInputObjectSchema as ClubMinOrderByAggregateInputObjectSchema } from './ClubMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  collegeId: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  cordinatorId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  onHold: SortOrderSchema.optional(),
  category: SortOrderSchema.optional(),
  logoUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  instagramUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  twitterUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  linkedinUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  youtubeUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  websiteUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => ClubCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ClubMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ClubMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ClubOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ClubOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubOrderByWithAggregationInput>;
export const ClubOrderByWithAggregationInputObjectZodSchema = makeSchema();
