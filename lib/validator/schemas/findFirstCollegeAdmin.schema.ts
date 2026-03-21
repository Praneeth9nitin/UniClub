import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CollegeAdminIncludeObjectSchema as CollegeAdminIncludeObjectSchema } from './objects/CollegeAdminInclude.schema';
import { CollegeAdminOrderByWithRelationInputObjectSchema as CollegeAdminOrderByWithRelationInputObjectSchema } from './objects/CollegeAdminOrderByWithRelationInput.schema';
import { CollegeAdminWhereInputObjectSchema as CollegeAdminWhereInputObjectSchema } from './objects/CollegeAdminWhereInput.schema';
import { CollegeAdminWhereUniqueInputObjectSchema as CollegeAdminWhereUniqueInputObjectSchema } from './objects/CollegeAdminWhereUniqueInput.schema';
import { CollegeAdminScalarFieldEnumSchema } from './enums/CollegeAdminScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CollegeAdminFindFirstSelectSchema: z.ZodType<Prisma.CollegeAdminSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    email: z.boolean().optional(),
    password: z.boolean().optional(),
    phone: z.boolean().optional(),
    collegeId: z.boolean().optional(),
    college: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CollegeAdminSelect>;

export const CollegeAdminFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    email: z.boolean().optional(),
    password: z.boolean().optional(),
    phone: z.boolean().optional(),
    collegeId: z.boolean().optional(),
    college: z.boolean().optional()
  }).strict();

export const CollegeAdminFindFirstSchema: z.ZodType<Prisma.CollegeAdminFindFirstArgs> = z.object({ select: CollegeAdminFindFirstSelectSchema.optional(), include: z.lazy(() => CollegeAdminIncludeObjectSchema.optional()), orderBy: z.union([CollegeAdminOrderByWithRelationInputObjectSchema, CollegeAdminOrderByWithRelationInputObjectSchema.array()]).optional(), where: CollegeAdminWhereInputObjectSchema.optional(), cursor: CollegeAdminWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CollegeAdminScalarFieldEnumSchema, CollegeAdminScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CollegeAdminFindFirstArgs>;

export const CollegeAdminFindFirstZodSchema = z.object({ select: CollegeAdminFindFirstSelectSchema.optional(), include: z.lazy(() => CollegeAdminIncludeObjectSchema.optional()), orderBy: z.union([CollegeAdminOrderByWithRelationInputObjectSchema, CollegeAdminOrderByWithRelationInputObjectSchema.array()]).optional(), where: CollegeAdminWhereInputObjectSchema.optional(), cursor: CollegeAdminWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CollegeAdminScalarFieldEnumSchema, CollegeAdminScalarFieldEnumSchema.array()]).optional() }).strict();