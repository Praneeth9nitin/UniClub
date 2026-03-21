import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { StudentWhereInputObjectSchema as StudentWhereInputObjectSchema } from './objects/StudentWhereInput.schema';
import { StudentOrderByWithAggregationInputObjectSchema as StudentOrderByWithAggregationInputObjectSchema } from './objects/StudentOrderByWithAggregationInput.schema';
import { StudentScalarWhereWithAggregatesInputObjectSchema as StudentScalarWhereWithAggregatesInputObjectSchema } from './objects/StudentScalarWhereWithAggregatesInput.schema';
import { StudentScalarFieldEnumSchema } from './enums/StudentScalarFieldEnum.schema';
import { StudentCountAggregateInputObjectSchema as StudentCountAggregateInputObjectSchema } from './objects/StudentCountAggregateInput.schema';
import { StudentMinAggregateInputObjectSchema as StudentMinAggregateInputObjectSchema } from './objects/StudentMinAggregateInput.schema';
import { StudentMaxAggregateInputObjectSchema as StudentMaxAggregateInputObjectSchema } from './objects/StudentMaxAggregateInput.schema';

export const StudentGroupBySchema: z.ZodType<Prisma.StudentGroupByArgs> = z.object({ where: StudentWhereInputObjectSchema.optional(), orderBy: z.union([StudentOrderByWithAggregationInputObjectSchema, StudentOrderByWithAggregationInputObjectSchema.array()]).optional(), having: StudentScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(StudentScalarFieldEnumSchema), _count: z.union([ z.literal(true), StudentCountAggregateInputObjectSchema ]).optional(), _min: StudentMinAggregateInputObjectSchema.optional(), _max: StudentMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StudentGroupByArgs>;

export const StudentGroupByZodSchema = z.object({ where: StudentWhereInputObjectSchema.optional(), orderBy: z.union([StudentOrderByWithAggregationInputObjectSchema, StudentOrderByWithAggregationInputObjectSchema.array()]).optional(), having: StudentScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(StudentScalarFieldEnumSchema), _count: z.union([ z.literal(true), StudentCountAggregateInputObjectSchema ]).optional(), _min: StudentMinAggregateInputObjectSchema.optional(), _max: StudentMaxAggregateInputObjectSchema.optional() }).strict();