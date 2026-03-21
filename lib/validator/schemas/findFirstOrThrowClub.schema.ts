import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ClubIncludeObjectSchema as ClubIncludeObjectSchema } from './objects/ClubInclude.schema';
import { ClubOrderByWithRelationInputObjectSchema as ClubOrderByWithRelationInputObjectSchema } from './objects/ClubOrderByWithRelationInput.schema';
import { ClubWhereInputObjectSchema as ClubWhereInputObjectSchema } from './objects/ClubWhereInput.schema';
import { ClubWhereUniqueInputObjectSchema as ClubWhereUniqueInputObjectSchema } from './objects/ClubWhereUniqueInput.schema';
import { ClubScalarFieldEnumSchema } from './enums/ClubScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ClubFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ClubSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    collegeId: z.boolean().optional(),
    description: z.boolean().optional(),
    cordinatorId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    onHold: z.boolean().optional(),
    category: z.boolean().optional(),
    college: z.boolean().optional(),
    coordinator: z.boolean().optional(),
    events: z.boolean().optional(),
    role: z.boolean().optional(),
    students: z.boolean().optional(),
    clubAdmin: z.boolean().optional(),
    logoUrl: z.boolean().optional(),
    instagramUrl: z.boolean().optional(),
    twitterUrl: z.boolean().optional(),
    linkedinUrl: z.boolean().optional(),
    youtubeUrl: z.boolean().optional(),
    websiteUrl: z.boolean().optional(),
    followers: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ClubSelect>;

export const ClubFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    collegeId: z.boolean().optional(),
    description: z.boolean().optional(),
    cordinatorId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    onHold: z.boolean().optional(),
    category: z.boolean().optional(),
    college: z.boolean().optional(),
    coordinator: z.boolean().optional(),
    events: z.boolean().optional(),
    role: z.boolean().optional(),
    students: z.boolean().optional(),
    clubAdmin: z.boolean().optional(),
    logoUrl: z.boolean().optional(),
    instagramUrl: z.boolean().optional(),
    twitterUrl: z.boolean().optional(),
    linkedinUrl: z.boolean().optional(),
    youtubeUrl: z.boolean().optional(),
    websiteUrl: z.boolean().optional(),
    followers: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ClubFindFirstOrThrowSchema: z.ZodType<Prisma.ClubFindFirstOrThrowArgs> = z.object({ select: ClubFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ClubIncludeObjectSchema.optional()), orderBy: z.union([ClubOrderByWithRelationInputObjectSchema, ClubOrderByWithRelationInputObjectSchema.array()]).optional(), where: ClubWhereInputObjectSchema.optional(), cursor: ClubWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ClubScalarFieldEnumSchema, ClubScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ClubFindFirstOrThrowArgs>;

export const ClubFindFirstOrThrowZodSchema = z.object({ select: ClubFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ClubIncludeObjectSchema.optional()), orderBy: z.union([ClubOrderByWithRelationInputObjectSchema, ClubOrderByWithRelationInputObjectSchema.array()]).optional(), where: ClubWhereInputObjectSchema.optional(), cursor: ClubWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ClubScalarFieldEnumSchema, ClubScalarFieldEnumSchema.array()]).optional() }).strict();