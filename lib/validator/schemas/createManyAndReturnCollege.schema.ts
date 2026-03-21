import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CollegeSelectObjectSchema as CollegeSelectObjectSchema } from './objects/CollegeSelect.schema';
import { CollegeCreateManyInputObjectSchema as CollegeCreateManyInputObjectSchema } from './objects/CollegeCreateManyInput.schema';

export const CollegeCreateManyAndReturnSchema: z.ZodType<Prisma.CollegeCreateManyAndReturnArgs> = z.object({ select: CollegeSelectObjectSchema.optional(), data: z.union([ CollegeCreateManyInputObjectSchema, z.array(CollegeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CollegeCreateManyAndReturnArgs>;

export const CollegeCreateManyAndReturnZodSchema = z.object({ select: CollegeSelectObjectSchema.optional(), data: z.union([ CollegeCreateManyInputObjectSchema, z.array(CollegeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();