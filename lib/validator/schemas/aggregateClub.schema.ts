import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ClubOrderByWithRelationInputObjectSchema as ClubOrderByWithRelationInputObjectSchema } from './objects/ClubOrderByWithRelationInput.schema';
import { ClubWhereInputObjectSchema as ClubWhereInputObjectSchema } from './objects/ClubWhereInput.schema';
import { ClubWhereUniqueInputObjectSchema as ClubWhereUniqueInputObjectSchema } from './objects/ClubWhereUniqueInput.schema';
import { ClubCountAggregateInputObjectSchema as ClubCountAggregateInputObjectSchema } from './objects/ClubCountAggregateInput.schema';
import { ClubMinAggregateInputObjectSchema as ClubMinAggregateInputObjectSchema } from './objects/ClubMinAggregateInput.schema';
import { ClubMaxAggregateInputObjectSchema as ClubMaxAggregateInputObjectSchema } from './objects/ClubMaxAggregateInput.schema';

export const ClubAggregateSchema: z.ZodType<Prisma.ClubAggregateArgs> = z.object({ orderBy: z.union([ClubOrderByWithRelationInputObjectSchema, ClubOrderByWithRelationInputObjectSchema.array()]).optional(), where: ClubWhereInputObjectSchema.optional(), cursor: ClubWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ClubCountAggregateInputObjectSchema ]).optional(), _min: ClubMinAggregateInputObjectSchema.optional(), _max: ClubMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ClubAggregateArgs>;

export const ClubAggregateZodSchema = z.object({ orderBy: z.union([ClubOrderByWithRelationInputObjectSchema, ClubOrderByWithRelationInputObjectSchema.array()]).optional(), where: ClubWhereInputObjectSchema.optional(), cursor: ClubWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ClubCountAggregateInputObjectSchema ]).optional(), _min: ClubMinAggregateInputObjectSchema.optional(), _max: ClubMaxAggregateInputObjectSchema.optional() }).strict();