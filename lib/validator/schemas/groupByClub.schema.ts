import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ClubWhereInputObjectSchema as ClubWhereInputObjectSchema } from './objects/ClubWhereInput.schema';
import { ClubOrderByWithAggregationInputObjectSchema as ClubOrderByWithAggregationInputObjectSchema } from './objects/ClubOrderByWithAggregationInput.schema';
import { ClubScalarWhereWithAggregatesInputObjectSchema as ClubScalarWhereWithAggregatesInputObjectSchema } from './objects/ClubScalarWhereWithAggregatesInput.schema';
import { ClubScalarFieldEnumSchema } from './enums/ClubScalarFieldEnum.schema';
import { ClubCountAggregateInputObjectSchema as ClubCountAggregateInputObjectSchema } from './objects/ClubCountAggregateInput.schema';
import { ClubMinAggregateInputObjectSchema as ClubMinAggregateInputObjectSchema } from './objects/ClubMinAggregateInput.schema';
import { ClubMaxAggregateInputObjectSchema as ClubMaxAggregateInputObjectSchema } from './objects/ClubMaxAggregateInput.schema';

export const ClubGroupBySchema: z.ZodType<Prisma.ClubGroupByArgs> = z.object({ where: ClubWhereInputObjectSchema.optional(), orderBy: z.union([ClubOrderByWithAggregationInputObjectSchema, ClubOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ClubScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ClubScalarFieldEnumSchema), _count: z.union([ z.literal(true), ClubCountAggregateInputObjectSchema ]).optional(), _min: ClubMinAggregateInputObjectSchema.optional(), _max: ClubMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ClubGroupByArgs>;

export const ClubGroupByZodSchema = z.object({ where: ClubWhereInputObjectSchema.optional(), orderBy: z.union([ClubOrderByWithAggregationInputObjectSchema, ClubOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ClubScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ClubScalarFieldEnumSchema), _count: z.union([ z.literal(true), ClubCountAggregateInputObjectSchema ]).optional(), _min: ClubMinAggregateInputObjectSchema.optional(), _max: ClubMaxAggregateInputObjectSchema.optional() }).strict();