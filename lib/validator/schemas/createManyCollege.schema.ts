import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CollegeCreateManyInputObjectSchema as CollegeCreateManyInputObjectSchema } from './objects/CollegeCreateManyInput.schema';

export const CollegeCreateManySchema: z.ZodType<Prisma.CollegeCreateManyArgs> = z.object({ data: z.union([ CollegeCreateManyInputObjectSchema, z.array(CollegeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CollegeCreateManyArgs>;

export const CollegeCreateManyZodSchema = z.object({ data: z.union([ CollegeCreateManyInputObjectSchema, z.array(CollegeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();