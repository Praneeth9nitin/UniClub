import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { FacultyWhereInputObjectSchema as FacultyWhereInputObjectSchema } from './objects/FacultyWhereInput.schema';
import { FacultyOrderByWithAggregationInputObjectSchema as FacultyOrderByWithAggregationInputObjectSchema } from './objects/FacultyOrderByWithAggregationInput.schema';
import { FacultyScalarWhereWithAggregatesInputObjectSchema as FacultyScalarWhereWithAggregatesInputObjectSchema } from './objects/FacultyScalarWhereWithAggregatesInput.schema';
import { FacultyScalarFieldEnumSchema } from './enums/FacultyScalarFieldEnum.schema';
import { FacultyCountAggregateInputObjectSchema as FacultyCountAggregateInputObjectSchema } from './objects/FacultyCountAggregateInput.schema';
import { FacultyMinAggregateInputObjectSchema as FacultyMinAggregateInputObjectSchema } from './objects/FacultyMinAggregateInput.schema';
import { FacultyMaxAggregateInputObjectSchema as FacultyMaxAggregateInputObjectSchema } from './objects/FacultyMaxAggregateInput.schema';

export const FacultyGroupBySchema: z.ZodType<Prisma.FacultyGroupByArgs> = z.object({ where: FacultyWhereInputObjectSchema.optional(), orderBy: z.union([FacultyOrderByWithAggregationInputObjectSchema, FacultyOrderByWithAggregationInputObjectSchema.array()]).optional(), having: FacultyScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(FacultyScalarFieldEnumSchema), _count: z.union([ z.literal(true), FacultyCountAggregateInputObjectSchema ]).optional(), _min: FacultyMinAggregateInputObjectSchema.optional(), _max: FacultyMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FacultyGroupByArgs>;

export const FacultyGroupByZodSchema = z.object({ where: FacultyWhereInputObjectSchema.optional(), orderBy: z.union([FacultyOrderByWithAggregationInputObjectSchema, FacultyOrderByWithAggregationInputObjectSchema.array()]).optional(), having: FacultyScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(FacultyScalarFieldEnumSchema), _count: z.union([ z.literal(true), FacultyCountAggregateInputObjectSchema ]).optional(), _min: FacultyMinAggregateInputObjectSchema.optional(), _max: FacultyMaxAggregateInputObjectSchema.optional() }).strict();