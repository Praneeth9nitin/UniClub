import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  collegeId: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  onHold: z.boolean().optional(),
  category: z.string(),
  logoUrl: z.string().optional().nullable(),
  instagramUrl: z.string().optional().nullable(),
  twitterUrl: z.string().optional().nullable(),
  linkedinUrl: z.string().optional().nullable(),
  youtubeUrl: z.string().optional().nullable(),
  websiteUrl: z.string().optional().nullable()
}).strict();
export const ClubCreateManyCoordinatorInputObjectSchema: z.ZodType<Prisma.ClubCreateManyCoordinatorInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubCreateManyCoordinatorInput>;
export const ClubCreateManyCoordinatorInputObjectZodSchema = makeSchema();
