import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ClubCreateManyInputObjectSchema as ClubCreateManyInputObjectSchema } from './objects/ClubCreateManyInput.schema';

export const ClubCreateManySchema: z.ZodType<Prisma.ClubCreateManyArgs> = z.object({ data: z.union([ ClubCreateManyInputObjectSchema, z.array(ClubCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ClubCreateManyArgs>;

export const ClubCreateManyZodSchema = z.object({ data: z.union([ ClubCreateManyInputObjectSchema, z.array(ClubCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();