import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { clubAdminOrderByWithRelationInputObjectSchema as clubAdminOrderByWithRelationInputObjectSchema } from './objects/clubAdminOrderByWithRelationInput.schema';
import { clubAdminWhereInputObjectSchema as clubAdminWhereInputObjectSchema } from './objects/clubAdminWhereInput.schema';
import { clubAdminWhereUniqueInputObjectSchema as clubAdminWhereUniqueInputObjectSchema } from './objects/clubAdminWhereUniqueInput.schema';
import { ClubAdminCountAggregateInputObjectSchema as ClubAdminCountAggregateInputObjectSchema } from './objects/ClubAdminCountAggregateInput.schema';

export const clubAdminCountSchema: z.ZodType<Prisma.clubAdminCountArgs> = z.object({ orderBy: z.union([clubAdminOrderByWithRelationInputObjectSchema, clubAdminOrderByWithRelationInputObjectSchema.array()]).optional(), where: clubAdminWhereInputObjectSchema.optional(), cursor: clubAdminWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ClubAdminCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.clubAdminCountArgs>;

export const clubAdminCountZodSchema = z.object({ orderBy: z.union([clubAdminOrderByWithRelationInputObjectSchema, clubAdminOrderByWithRelationInputObjectSchema.array()]).optional(), where: clubAdminWhereInputObjectSchema.optional(), cursor: clubAdminWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ClubAdminCountAggregateInputObjectSchema ]).optional() }).strict();