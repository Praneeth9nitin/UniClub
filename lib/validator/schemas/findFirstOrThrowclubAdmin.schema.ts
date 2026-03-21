import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { clubAdminIncludeObjectSchema as clubAdminIncludeObjectSchema } from './objects/clubAdminInclude.schema';
import { clubAdminOrderByWithRelationInputObjectSchema as clubAdminOrderByWithRelationInputObjectSchema } from './objects/clubAdminOrderByWithRelationInput.schema';
import { clubAdminWhereInputObjectSchema as clubAdminWhereInputObjectSchema } from './objects/clubAdminWhereInput.schema';
import { clubAdminWhereUniqueInputObjectSchema as clubAdminWhereUniqueInputObjectSchema } from './objects/clubAdminWhereUniqueInput.schema';
import { ClubAdminScalarFieldEnumSchema } from './enums/ClubAdminScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const clubAdminFindFirstOrThrowSelectSchema: z.ZodType<Prisma.clubAdminSelect> = z.object({
    id: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    email: z.boolean().optional(),
    password: z.boolean().optional(),
    clubId: z.boolean().optional(),
    club: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.clubAdminSelect>;

export const clubAdminFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    email: z.boolean().optional(),
    password: z.boolean().optional(),
    clubId: z.boolean().optional(),
    club: z.boolean().optional()
  }).strict();

export const clubAdminFindFirstOrThrowSchema: z.ZodType<Prisma.clubAdminFindFirstOrThrowArgs> = z.object({ select: clubAdminFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => clubAdminIncludeObjectSchema.optional()), orderBy: z.union([clubAdminOrderByWithRelationInputObjectSchema, clubAdminOrderByWithRelationInputObjectSchema.array()]).optional(), where: clubAdminWhereInputObjectSchema.optional(), cursor: clubAdminWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ClubAdminScalarFieldEnumSchema, ClubAdminScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.clubAdminFindFirstOrThrowArgs>;

export const clubAdminFindFirstOrThrowZodSchema = z.object({ select: clubAdminFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => clubAdminIncludeObjectSchema.optional()), orderBy: z.union([clubAdminOrderByWithRelationInputObjectSchema, clubAdminOrderByWithRelationInputObjectSchema.array()]).optional(), where: clubAdminWhereInputObjectSchema.optional(), cursor: clubAdminWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ClubAdminScalarFieldEnumSchema, ClubAdminScalarFieldEnumSchema.array()]).optional() }).strict();