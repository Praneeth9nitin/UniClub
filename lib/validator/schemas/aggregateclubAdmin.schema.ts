import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { clubAdminOrderByWithRelationInputObjectSchema as clubAdminOrderByWithRelationInputObjectSchema } from './objects/clubAdminOrderByWithRelationInput.schema';
import { clubAdminWhereInputObjectSchema as clubAdminWhereInputObjectSchema } from './objects/clubAdminWhereInput.schema';
import { clubAdminWhereUniqueInputObjectSchema as clubAdminWhereUniqueInputObjectSchema } from './objects/clubAdminWhereUniqueInput.schema';
import { ClubAdminCountAggregateInputObjectSchema as ClubAdminCountAggregateInputObjectSchema } from './objects/ClubAdminCountAggregateInput.schema';
import { ClubAdminMinAggregateInputObjectSchema as ClubAdminMinAggregateInputObjectSchema } from './objects/ClubAdminMinAggregateInput.schema';
import { ClubAdminMaxAggregateInputObjectSchema as ClubAdminMaxAggregateInputObjectSchema } from './objects/ClubAdminMaxAggregateInput.schema';

export const clubAdminAggregateSchema: z.ZodType<Prisma.clubAdminAggregateArgs> = z.object({ orderBy: z.union([clubAdminOrderByWithRelationInputObjectSchema, clubAdminOrderByWithRelationInputObjectSchema.array()]).optional(), where: clubAdminWhereInputObjectSchema.optional(), cursor: clubAdminWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ClubAdminCountAggregateInputObjectSchema ]).optional(), _min: ClubAdminMinAggregateInputObjectSchema.optional(), _max: ClubAdminMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.clubAdminAggregateArgs>;

export const clubAdminAggregateZodSchema = z.object({ orderBy: z.union([clubAdminOrderByWithRelationInputObjectSchema, clubAdminOrderByWithRelationInputObjectSchema.array()]).optional(), where: clubAdminWhereInputObjectSchema.optional(), cursor: clubAdminWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ClubAdminCountAggregateInputObjectSchema ]).optional(), _min: ClubAdminMinAggregateInputObjectSchema.optional(), _max: ClubAdminMaxAggregateInputObjectSchema.optional() }).strict();