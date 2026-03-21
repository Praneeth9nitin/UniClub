import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ClubOrderByWithRelationInputObjectSchema as ClubOrderByWithRelationInputObjectSchema } from './objects/ClubOrderByWithRelationInput.schema';
import { ClubWhereInputObjectSchema as ClubWhereInputObjectSchema } from './objects/ClubWhereInput.schema';
import { ClubWhereUniqueInputObjectSchema as ClubWhereUniqueInputObjectSchema } from './objects/ClubWhereUniqueInput.schema';
import { ClubCountAggregateInputObjectSchema as ClubCountAggregateInputObjectSchema } from './objects/ClubCountAggregateInput.schema';

export const ClubCountSchema: z.ZodType<Prisma.ClubCountArgs> = z.object({ orderBy: z.union([ClubOrderByWithRelationInputObjectSchema, ClubOrderByWithRelationInputObjectSchema.array()]).optional(), where: ClubWhereInputObjectSchema.optional(), cursor: ClubWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ClubCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ClubCountArgs>;

export const ClubCountZodSchema = z.object({ orderBy: z.union([ClubOrderByWithRelationInputObjectSchema, ClubOrderByWithRelationInputObjectSchema.array()]).optional(), where: ClubWhereInputObjectSchema.optional(), cursor: ClubWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ClubCountAggregateInputObjectSchema ]).optional() }).strict();