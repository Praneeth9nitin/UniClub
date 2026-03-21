import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CollegeWhereInputObjectSchema as CollegeWhereInputObjectSchema } from './objects/CollegeWhereInput.schema';

export const CollegeDeleteManySchema: z.ZodType<Prisma.CollegeDeleteManyArgs> = z.object({ where: CollegeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CollegeDeleteManyArgs>;

export const CollegeDeleteManyZodSchema = z.object({ where: CollegeWhereInputObjectSchema.optional() }).strict();