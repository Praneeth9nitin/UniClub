import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  collegeId: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  cordinatorId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional(),
  onHold: SortOrderSchema.optional(),
  category: SortOrderSchema.optional(),
  logoUrl: SortOrderSchema.optional(),
  instagramUrl: SortOrderSchema.optional(),
  twitterUrl: SortOrderSchema.optional(),
  linkedinUrl: SortOrderSchema.optional(),
  youtubeUrl: SortOrderSchema.optional(),
  websiteUrl: SortOrderSchema.optional()
}).strict();
export const ClubMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ClubMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubMaxOrderByAggregateInput>;
export const ClubMaxOrderByAggregateInputObjectZodSchema = makeSchema();
