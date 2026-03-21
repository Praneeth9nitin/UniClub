import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CollegeOrderByWithRelationInputObjectSchema as CollegeOrderByWithRelationInputObjectSchema } from './objects/CollegeOrderByWithRelationInput.schema';
import { CollegeWhereInputObjectSchema as CollegeWhereInputObjectSchema } from './objects/CollegeWhereInput.schema';
import { CollegeWhereUniqueInputObjectSchema as CollegeWhereUniqueInputObjectSchema } from './objects/CollegeWhereUniqueInput.schema';
import { CollegeCountAggregateInputObjectSchema as CollegeCountAggregateInputObjectSchema } from './objects/CollegeCountAggregateInput.schema';

export const CollegeCountSchema: z.ZodType<Prisma.CollegeCountArgs> = z.object({ orderBy: z.union([CollegeOrderByWithRelationInputObjectSchema, CollegeOrderByWithRelationInputObjectSchema.array()]).optional(), where: CollegeWhereInputObjectSchema.optional(), cursor: CollegeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CollegeCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.CollegeCountArgs>;

export const CollegeCountZodSchema = z.object({ orderBy: z.union([CollegeOrderByWithRelationInputObjectSchema, CollegeOrderByWithRelationInputObjectSchema.array()]).optional(), where: CollegeWhereInputObjectSchema.optional(), cursor: CollegeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CollegeCountAggregateInputObjectSchema ]).optional() }).strict();