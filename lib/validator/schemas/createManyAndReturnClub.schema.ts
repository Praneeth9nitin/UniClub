import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ClubSelectObjectSchema as ClubSelectObjectSchema } from './objects/ClubSelect.schema';
import { ClubCreateManyInputObjectSchema as ClubCreateManyInputObjectSchema } from './objects/ClubCreateManyInput.schema';

export const ClubCreateManyAndReturnSchema: z.ZodType<Prisma.ClubCreateManyAndReturnArgs> = z.object({ select: ClubSelectObjectSchema.optional(), data: z.union([ ClubCreateManyInputObjectSchema, z.array(ClubCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ClubCreateManyAndReturnArgs>;

export const ClubCreateManyAndReturnZodSchema = z.object({ select: ClubSelectObjectSchema.optional(), data: z.union([ ClubCreateManyInputObjectSchema, z.array(ClubCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();