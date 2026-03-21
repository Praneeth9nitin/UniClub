import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { StudentOrderByWithRelationInputObjectSchema as StudentOrderByWithRelationInputObjectSchema } from './objects/StudentOrderByWithRelationInput.schema';
import { StudentWhereInputObjectSchema as StudentWhereInputObjectSchema } from './objects/StudentWhereInput.schema';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './objects/StudentWhereUniqueInput.schema';
import { StudentCountAggregateInputObjectSchema as StudentCountAggregateInputObjectSchema } from './objects/StudentCountAggregateInput.schema';
import { StudentMinAggregateInputObjectSchema as StudentMinAggregateInputObjectSchema } from './objects/StudentMinAggregateInput.schema';
import { StudentMaxAggregateInputObjectSchema as StudentMaxAggregateInputObjectSchema } from './objects/StudentMaxAggregateInput.schema';

export const StudentAggregateSchema: z.ZodType<Prisma.StudentAggregateArgs> = z.object({ orderBy: z.union([StudentOrderByWithRelationInputObjectSchema, StudentOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudentWhereInputObjectSchema.optional(), cursor: StudentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), StudentCountAggregateInputObjectSchema ]).optional(), _min: StudentMinAggregateInputObjectSchema.optional(), _max: StudentMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StudentAggregateArgs>;

export const StudentAggregateZodSchema = z.object({ orderBy: z.union([StudentOrderByWithRelationInputObjectSchema, StudentOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudentWhereInputObjectSchema.optional(), cursor: StudentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), StudentCountAggregateInputObjectSchema ]).optional(), _min: StudentMinAggregateInputObjectSchema.optional(), _max: StudentMaxAggregateInputObjectSchema.optional() }).strict();