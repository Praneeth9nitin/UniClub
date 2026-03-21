import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { FacultyOrderByWithRelationInputObjectSchema as FacultyOrderByWithRelationInputObjectSchema } from './objects/FacultyOrderByWithRelationInput.schema';
import { FacultyWhereInputObjectSchema as FacultyWhereInputObjectSchema } from './objects/FacultyWhereInput.schema';
import { FacultyWhereUniqueInputObjectSchema as FacultyWhereUniqueInputObjectSchema } from './objects/FacultyWhereUniqueInput.schema';
import { FacultyCountAggregateInputObjectSchema as FacultyCountAggregateInputObjectSchema } from './objects/FacultyCountAggregateInput.schema';
import { FacultyMinAggregateInputObjectSchema as FacultyMinAggregateInputObjectSchema } from './objects/FacultyMinAggregateInput.schema';
import { FacultyMaxAggregateInputObjectSchema as FacultyMaxAggregateInputObjectSchema } from './objects/FacultyMaxAggregateInput.schema';

export const FacultyAggregateSchema: z.ZodType<Prisma.FacultyAggregateArgs> = z.object({ orderBy: z.union([FacultyOrderByWithRelationInputObjectSchema, FacultyOrderByWithRelationInputObjectSchema.array()]).optional(), where: FacultyWhereInputObjectSchema.optional(), cursor: FacultyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), FacultyCountAggregateInputObjectSchema ]).optional(), _min: FacultyMinAggregateInputObjectSchema.optional(), _max: FacultyMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FacultyAggregateArgs>;

export const FacultyAggregateZodSchema = z.object({ orderBy: z.union([FacultyOrderByWithRelationInputObjectSchema, FacultyOrderByWithRelationInputObjectSchema.array()]).optional(), where: FacultyWhereInputObjectSchema.optional(), cursor: FacultyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), FacultyCountAggregateInputObjectSchema ]).optional(), _min: FacultyMinAggregateInputObjectSchema.optional(), _max: FacultyMaxAggregateInputObjectSchema.optional() }).strict();