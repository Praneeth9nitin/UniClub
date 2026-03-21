import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RoleInClubOrderByWithRelationInputObjectSchema as RoleInClubOrderByWithRelationInputObjectSchema } from './objects/RoleInClubOrderByWithRelationInput.schema';
import { RoleInClubWhereInputObjectSchema as RoleInClubWhereInputObjectSchema } from './objects/RoleInClubWhereInput.schema';
import { RoleInClubWhereUniqueInputObjectSchema as RoleInClubWhereUniqueInputObjectSchema } from './objects/RoleInClubWhereUniqueInput.schema';
import { RoleInClubCountAggregateInputObjectSchema as RoleInClubCountAggregateInputObjectSchema } from './objects/RoleInClubCountAggregateInput.schema';

export const RoleInClubCountSchema: z.ZodType<Prisma.RoleInClubCountArgs> = z.object({ orderBy: z.union([RoleInClubOrderByWithRelationInputObjectSchema, RoleInClubOrderByWithRelationInputObjectSchema.array()]).optional(), where: RoleInClubWhereInputObjectSchema.optional(), cursor: RoleInClubWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RoleInClubCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.RoleInClubCountArgs>;

export const RoleInClubCountZodSchema = z.object({ orderBy: z.union([RoleInClubOrderByWithRelationInputObjectSchema, RoleInClubOrderByWithRelationInputObjectSchema.array()]).optional(), where: RoleInClubWhereInputObjectSchema.optional(), cursor: RoleInClubWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RoleInClubCountAggregateInputObjectSchema ]).optional() }).strict();