import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { StudentOrderByWithRelationInputObjectSchema as StudentOrderByWithRelationInputObjectSchema } from './objects/StudentOrderByWithRelationInput.schema';
import { StudentWhereInputObjectSchema as StudentWhereInputObjectSchema } from './objects/StudentWhereInput.schema';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './objects/StudentWhereUniqueInput.schema';
import { StudentCountAggregateInputObjectSchema as StudentCountAggregateInputObjectSchema } from './objects/StudentCountAggregateInput.schema';

export const StudentCountSchema: z.ZodType<Prisma.StudentCountArgs> = z.object({ orderBy: z.union([StudentOrderByWithRelationInputObjectSchema, StudentOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudentWhereInputObjectSchema.optional(), cursor: StudentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), StudentCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.StudentCountArgs>;

export const StudentCountZodSchema = z.object({ orderBy: z.union([StudentOrderByWithRelationInputObjectSchema, StudentOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudentWhereInputObjectSchema.optional(), cursor: StudentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), StudentCountAggregateInputObjectSchema ]).optional() }).strict();