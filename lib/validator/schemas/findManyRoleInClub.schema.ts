import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RoleInClubIncludeObjectSchema as RoleInClubIncludeObjectSchema } from './objects/RoleInClubInclude.schema';
import { RoleInClubOrderByWithRelationInputObjectSchema as RoleInClubOrderByWithRelationInputObjectSchema } from './objects/RoleInClubOrderByWithRelationInput.schema';
import { RoleInClubWhereInputObjectSchema as RoleInClubWhereInputObjectSchema } from './objects/RoleInClubWhereInput.schema';
import { RoleInClubWhereUniqueInputObjectSchema as RoleInClubWhereUniqueInputObjectSchema } from './objects/RoleInClubWhereUniqueInput.schema';
import { RoleInClubScalarFieldEnumSchema } from './enums/RoleInClubScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RoleInClubFindManySelectSchema: z.ZodType<Prisma.RoleInClubSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    clubId: z.boolean().optional(),
    club: z.boolean().optional(),
    members: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.RoleInClubSelect>;

export const RoleInClubFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    clubId: z.boolean().optional(),
    club: z.boolean().optional(),
    members: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const RoleInClubFindManySchema: z.ZodType<Prisma.RoleInClubFindManyArgs> = z.object({ select: RoleInClubFindManySelectSchema.optional(), include: z.lazy(() => RoleInClubIncludeObjectSchema.optional()), orderBy: z.union([RoleInClubOrderByWithRelationInputObjectSchema, RoleInClubOrderByWithRelationInputObjectSchema.array()]).optional(), where: RoleInClubWhereInputObjectSchema.optional(), cursor: RoleInClubWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RoleInClubScalarFieldEnumSchema, RoleInClubScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.RoleInClubFindManyArgs>;

export const RoleInClubFindManyZodSchema = z.object({ select: RoleInClubFindManySelectSchema.optional(), include: z.lazy(() => RoleInClubIncludeObjectSchema.optional()), orderBy: z.union([RoleInClubOrderByWithRelationInputObjectSchema, RoleInClubOrderByWithRelationInputObjectSchema.array()]).optional(), where: RoleInClubWhereInputObjectSchema.optional(), cursor: RoleInClubWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RoleInClubScalarFieldEnumSchema, RoleInClubScalarFieldEnumSchema.array()]).optional() }).strict();