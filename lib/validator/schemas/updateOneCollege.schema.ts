import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CollegeSelectObjectSchema as CollegeSelectObjectSchema } from './objects/CollegeSelect.schema';
import { CollegeIncludeObjectSchema as CollegeIncludeObjectSchema } from './objects/CollegeInclude.schema';
import { CollegeUpdateInputObjectSchema as CollegeUpdateInputObjectSchema } from './objects/CollegeUpdateInput.schema';
import { CollegeUncheckedUpdateInputObjectSchema as CollegeUncheckedUpdateInputObjectSchema } from './objects/CollegeUncheckedUpdateInput.schema';
import { CollegeWhereUniqueInputObjectSchema as CollegeWhereUniqueInputObjectSchema } from './objects/CollegeWhereUniqueInput.schema';

export const CollegeUpdateOneSchema: z.ZodType<Prisma.CollegeUpdateArgs> = z.object({ select: CollegeSelectObjectSchema.optional(), include: CollegeIncludeObjectSchema.optional(), data: z.union([CollegeUpdateInputObjectSchema, CollegeUncheckedUpdateInputObjectSchema]), where: CollegeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CollegeUpdateArgs>;

export const CollegeUpdateOneZodSchema = z.object({ select: CollegeSelectObjectSchema.optional(), include: CollegeIncludeObjectSchema.optional(), data: z.union([CollegeUpdateInputObjectSchema, CollegeUncheckedUpdateInputObjectSchema]), where: CollegeWhereUniqueInputObjectSchema }).strict();