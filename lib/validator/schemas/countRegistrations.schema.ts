import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RegistrationsOrderByWithRelationInputObjectSchema as RegistrationsOrderByWithRelationInputObjectSchema } from './objects/RegistrationsOrderByWithRelationInput.schema';
import { RegistrationsWhereInputObjectSchema as RegistrationsWhereInputObjectSchema } from './objects/RegistrationsWhereInput.schema';
import { RegistrationsWhereUniqueInputObjectSchema as RegistrationsWhereUniqueInputObjectSchema } from './objects/RegistrationsWhereUniqueInput.schema';
import { RegistrationsCountAggregateInputObjectSchema as RegistrationsCountAggregateInputObjectSchema } from './objects/RegistrationsCountAggregateInput.schema';

export const RegistrationsCountSchema: z.ZodType<Prisma.RegistrationsCountArgs> = z.object({ orderBy: z.union([RegistrationsOrderByWithRelationInputObjectSchema, RegistrationsOrderByWithRelationInputObjectSchema.array()]).optional(), where: RegistrationsWhereInputObjectSchema.optional(), cursor: RegistrationsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RegistrationsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.RegistrationsCountArgs>;

export const RegistrationsCountZodSchema = z.object({ orderBy: z.union([RegistrationsOrderByWithRelationInputObjectSchema, RegistrationsOrderByWithRelationInputObjectSchema.array()]).optional(), where: RegistrationsWhereInputObjectSchema.optional(), cursor: RegistrationsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RegistrationsCountAggregateInputObjectSchema ]).optional() }).strict();