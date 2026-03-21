import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CollegeSelectObjectSchema as CollegeSelectObjectSchema } from './objects/CollegeSelect.schema';
import { CollegeIncludeObjectSchema as CollegeIncludeObjectSchema } from './objects/CollegeInclude.schema';
import { CollegeWhereUniqueInputObjectSchema as CollegeWhereUniqueInputObjectSchema } from './objects/CollegeWhereUniqueInput.schema';

export const CollegeDeleteOneSchema: z.ZodType<Prisma.CollegeDeleteArgs> = z.object({ select: CollegeSelectObjectSchema.optional(), include: CollegeIncludeObjectSchema.optional(), where: CollegeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CollegeDeleteArgs>;

export const CollegeDeleteOneZodSchema = z.object({ select: CollegeSelectObjectSchema.optional(), include: CollegeIncludeObjectSchema.optional(), where: CollegeWhereUniqueInputObjectSchema }).strict();