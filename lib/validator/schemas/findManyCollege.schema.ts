import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CollegeIncludeObjectSchema as CollegeIncludeObjectSchema } from './objects/CollegeInclude.schema';
import { CollegeOrderByWithRelationInputObjectSchema as CollegeOrderByWithRelationInputObjectSchema } from './objects/CollegeOrderByWithRelationInput.schema';
import { CollegeWhereInputObjectSchema as CollegeWhereInputObjectSchema } from './objects/CollegeWhereInput.schema';
import { CollegeWhereUniqueInputObjectSchema as CollegeWhereUniqueInputObjectSchema } from './objects/CollegeWhereUniqueInput.schema';
import { CollegeScalarFieldEnumSchema } from './enums/CollegeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CollegeFindManySelectSchema: z.ZodType<Prisma.CollegeSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    city: z.boolean().optional(),
    state: z.boolean().optional(),
    collegeType: z.boolean().optional(),
    logoUrl: z.boolean().optional(),
    websiteUrl: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    country: z.boolean().optional(),
    accrediation: z.boolean().optional(),
    address: z.boolean().optional(),
    affiliatedUniversity: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    establisedYear: z.boolean().optional(),
    latitude: z.boolean().optional(),
    longitude: z.boolean().optional(),
    officialEmail: z.boolean().optional(),
    phone: z.boolean().optional(),
    pincode: z.boolean().optional(),
    regitrationNumber: z.boolean().optional(),
    verificationNote: z.boolean().optional(),
    verififedTime: z.boolean().optional(),
    verified: z.boolean().optional(),
    clubs: z.boolean().optional(),
    admin: z.boolean().optional(),
    faculty: z.boolean().optional(),
    students: z.boolean().optional(),
    followers: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CollegeSelect>;

export const CollegeFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    city: z.boolean().optional(),
    state: z.boolean().optional(),
    collegeType: z.boolean().optional(),
    logoUrl: z.boolean().optional(),
    websiteUrl: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    country: z.boolean().optional(),
    accrediation: z.boolean().optional(),
    address: z.boolean().optional(),
    affiliatedUniversity: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    establisedYear: z.boolean().optional(),
    latitude: z.boolean().optional(),
    longitude: z.boolean().optional(),
    officialEmail: z.boolean().optional(),
    phone: z.boolean().optional(),
    pincode: z.boolean().optional(),
    regitrationNumber: z.boolean().optional(),
    verificationNote: z.boolean().optional(),
    verififedTime: z.boolean().optional(),
    verified: z.boolean().optional(),
    clubs: z.boolean().optional(),
    admin: z.boolean().optional(),
    faculty: z.boolean().optional(),
    students: z.boolean().optional(),
    followers: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const CollegeFindManySchema: z.ZodType<Prisma.CollegeFindManyArgs> = z.object({ select: CollegeFindManySelectSchema.optional(), include: z.lazy(() => CollegeIncludeObjectSchema.optional()), orderBy: z.union([CollegeOrderByWithRelationInputObjectSchema, CollegeOrderByWithRelationInputObjectSchema.array()]).optional(), where: CollegeWhereInputObjectSchema.optional(), cursor: CollegeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CollegeScalarFieldEnumSchema, CollegeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CollegeFindManyArgs>;

export const CollegeFindManyZodSchema = z.object({ select: CollegeFindManySelectSchema.optional(), include: z.lazy(() => CollegeIncludeObjectSchema.optional()), orderBy: z.union([CollegeOrderByWithRelationInputObjectSchema, CollegeOrderByWithRelationInputObjectSchema.array()]).optional(), where: CollegeWhereInputObjectSchema.optional(), cursor: CollegeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CollegeScalarFieldEnumSchema, CollegeScalarFieldEnumSchema.array()]).optional() }).strict();