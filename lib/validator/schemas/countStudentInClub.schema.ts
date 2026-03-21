import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { StudentInClubOrderByWithRelationInputObjectSchema as StudentInClubOrderByWithRelationInputObjectSchema } from './objects/StudentInClubOrderByWithRelationInput.schema';
import { StudentInClubWhereInputObjectSchema as StudentInClubWhereInputObjectSchema } from './objects/StudentInClubWhereInput.schema';
import { StudentInClubWhereUniqueInputObjectSchema as StudentInClubWhereUniqueInputObjectSchema } from './objects/StudentInClubWhereUniqueInput.schema';
import { StudentInClubCountAggregateInputObjectSchema as StudentInClubCountAggregateInputObjectSchema } from './objects/StudentInClubCountAggregateInput.schema';

export const StudentInClubCountSchema: z.ZodType<Prisma.StudentInClubCountArgs> = z.object({ orderBy: z.union([StudentInClubOrderByWithRelationInputObjectSchema, StudentInClubOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudentInClubWhereInputObjectSchema.optional(), cursor: StudentInClubWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), StudentInClubCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.StudentInClubCountArgs>;

export const StudentInClubCountZodSchema = z.object({ orderBy: z.union([StudentInClubOrderByWithRelationInputObjectSchema, StudentInClubOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudentInClubWhereInputObjectSchema.optional(), cursor: StudentInClubWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), StudentInClubCountAggregateInputObjectSchema ]).optional() }).strict();