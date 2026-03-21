import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { FacultyOrderByWithRelationInputObjectSchema as FacultyOrderByWithRelationInputObjectSchema } from './objects/FacultyOrderByWithRelationInput.schema';
import { FacultyWhereInputObjectSchema as FacultyWhereInputObjectSchema } from './objects/FacultyWhereInput.schema';
import { FacultyWhereUniqueInputObjectSchema as FacultyWhereUniqueInputObjectSchema } from './objects/FacultyWhereUniqueInput.schema';
import { FacultyCountAggregateInputObjectSchema as FacultyCountAggregateInputObjectSchema } from './objects/FacultyCountAggregateInput.schema';

export const FacultyCountSchema: z.ZodType<Prisma.FacultyCountArgs> = z.object({ orderBy: z.union([FacultyOrderByWithRelationInputObjectSchema, FacultyOrderByWithRelationInputObjectSchema.array()]).optional(), where: FacultyWhereInputObjectSchema.optional(), cursor: FacultyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), FacultyCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.FacultyCountArgs>;

export const FacultyCountZodSchema = z.object({ orderBy: z.union([FacultyOrderByWithRelationInputObjectSchema, FacultyOrderByWithRelationInputObjectSchema.array()]).optional(), where: FacultyWhereInputObjectSchema.optional(), cursor: FacultyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), FacultyCountAggregateInputObjectSchema ]).optional() }).strict();