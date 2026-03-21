import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  collegeId: z.literal(true).optional(),
  description: z.literal(true).optional(),
  cordinatorId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  deletedAt: z.literal(true).optional(),
  onHold: z.literal(true).optional(),
  category: z.literal(true).optional(),
  logoUrl: z.literal(true).optional(),
  instagramUrl: z.literal(true).optional(),
  twitterUrl: z.literal(true).optional(),
  linkedinUrl: z.literal(true).optional(),
  youtubeUrl: z.literal(true).optional(),
  websiteUrl: z.literal(true).optional()
}).strict();
export const ClubMinAggregateInputObjectSchema: z.ZodType<Prisma.ClubMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ClubMinAggregateInputType>;
export const ClubMinAggregateInputObjectZodSchema = makeSchema();
