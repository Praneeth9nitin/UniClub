import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { FacultyIncludeObjectSchema as FacultyIncludeObjectSchema } from './objects/FacultyInclude.schema';
import { FacultyOrderByWithRelationInputObjectSchema as FacultyOrderByWithRelationInputObjectSchema } from './objects/FacultyOrderByWithRelationInput.schema';
import { FacultyWhereInputObjectSchema as FacultyWhereInputObjectSchema } from './objects/FacultyWhereInput.schema';
import { FacultyWhereUniqueInputObjectSchema as FacultyWhereUniqueInputObjectSchema } from './objects/FacultyWhereUniqueInput.schema';
import { FacultyScalarFieldEnumSchema } from './enums/FacultyScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const FacultyFindFirstSelectSchema: z.ZodType<Prisma.FacultySelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    collegeId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    email: z.boolean().optional(),
    password: z.boolean().optional(),
    club: z.boolean().optional(),
    college: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.FacultySelect>;

export const FacultyFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    collegeId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    email: z.boolean().optional(),
    password: z.boolean().optional(),
    club: z.boolean().optional(),
    college: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const FacultyFindFirstSchema: z.ZodType<Prisma.FacultyFindFirstArgs> = z.object({ select: FacultyFindFirstSelectSchema.optional(), include: z.lazy(() => FacultyIncludeObjectSchema.optional()), orderBy: z.union([FacultyOrderByWithRelationInputObjectSchema, FacultyOrderByWithRelationInputObjectSchema.array()]).optional(), where: FacultyWhereInputObjectSchema.optional(), cursor: FacultyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FacultyScalarFieldEnumSchema, FacultyScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.FacultyFindFirstArgs>;

export const FacultyFindFirstZodSchema = z.object({ select: FacultyFindFirstSelectSchema.optional(), include: z.lazy(() => FacultyIncludeObjectSchema.optional()), orderBy: z.union([FacultyOrderByWithRelationInputObjectSchema, FacultyOrderByWithRelationInputObjectSchema.array()]).optional(), where: FacultyWhereInputObjectSchema.optional(), cursor: FacultyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FacultyScalarFieldEnumSchema, FacultyScalarFieldEnumSchema.array()]).optional() }).strict();