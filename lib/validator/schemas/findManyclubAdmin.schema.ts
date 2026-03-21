import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { clubAdminIncludeObjectSchema as clubAdminIncludeObjectSchema } from './objects/clubAdminInclude.schema';
import { clubAdminOrderByWithRelationInputObjectSchema as clubAdminOrderByWithRelationInputObjectSchema } from './objects/clubAdminOrderByWithRelationInput.schema';
import { clubAdminWhereInputObjectSchema as clubAdminWhereInputObjectSchema } from './objects/clubAdminWhereInput.schema';
import { clubAdminWhereUniqueInputObjectSchema as clubAdminWhereUniqueInputObjectSchema } from './objects/clubAdminWhereUniqueInput.schema';
import { ClubAdminScalarFieldEnumSchema } from './enums/ClubAdminScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const clubAdminFindManySelectSchema: z.ZodType<Prisma.clubAdminSelect> = z.object({
    id: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    email: z.boolean().optional(),
    password: z.boolean().optional(),
    clubId: z.boolean().optional(),
    club: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.clubAdminSelect>;

export const clubAdminFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    email: z.boolean().optional(),
    password: z.boolean().optional(),
    clubId: z.boolean().optional(),
    club: z.boolean().optional()
  }).strict();

export const clubAdminFindManySchema: z.ZodType<Prisma.clubAdminFindManyArgs> = z.object({ select: clubAdminFindManySelectSchema.optional(), include: z.lazy(() => clubAdminIncludeObjectSchema.optional()), orderBy: z.union([clubAdminOrderByWithRelationInputObjectSchema, clubAdminOrderByWithRelationInputObjectSchema.array()]).optional(), where: clubAdminWhereInputObjectSchema.optional(), cursor: clubAdminWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ClubAdminScalarFieldEnumSchema, ClubAdminScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.clubAdminFindManyArgs>;

export const clubAdminFindManyZodSchema = z.object({ select: clubAdminFindManySelectSchema.optional(), include: z.lazy(() => clubAdminIncludeObjectSchema.optional()), orderBy: z.union([clubAdminOrderByWithRelationInputObjectSchema, clubAdminOrderByWithRelationInputObjectSchema.array()]).optional(), where: clubAdminWhereInputObjectSchema.optional(), cursor: clubAdminWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ClubAdminScalarFieldEnumSchema, ClubAdminScalarFieldEnumSchema.array()]).optional() }).strict();