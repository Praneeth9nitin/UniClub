import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CollegeAdminOrderByWithRelationInputObjectSchema as CollegeAdminOrderByWithRelationInputObjectSchema } from './objects/CollegeAdminOrderByWithRelationInput.schema';
import { CollegeAdminWhereInputObjectSchema as CollegeAdminWhereInputObjectSchema } from './objects/CollegeAdminWhereInput.schema';
import { CollegeAdminWhereUniqueInputObjectSchema as CollegeAdminWhereUniqueInputObjectSchema } from './objects/CollegeAdminWhereUniqueInput.schema';
import { CollegeAdminCountAggregateInputObjectSchema as CollegeAdminCountAggregateInputObjectSchema } from './objects/CollegeAdminCountAggregateInput.schema';

export const CollegeAdminCountSchema: z.ZodType<Prisma.CollegeAdminCountArgs> = z.object({ orderBy: z.union([CollegeAdminOrderByWithRelationInputObjectSchema, CollegeAdminOrderByWithRelationInputObjectSchema.array()]).optional(), where: CollegeAdminWhereInputObjectSchema.optional(), cursor: CollegeAdminWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CollegeAdminCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.CollegeAdminCountArgs>;

export const CollegeAdminCountZodSchema = z.object({ orderBy: z.union([CollegeAdminOrderByWithRelationInputObjectSchema, CollegeAdminOrderByWithRelationInputObjectSchema.array()]).optional(), where: CollegeAdminWhereInputObjectSchema.optional(), cursor: CollegeAdminWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CollegeAdminCountAggregateInputObjectSchema ]).optional() }).strict();