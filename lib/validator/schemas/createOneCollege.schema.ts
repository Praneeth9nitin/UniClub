import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CollegeSelectObjectSchema as CollegeSelectObjectSchema } from './objects/CollegeSelect.schema';
import { CollegeIncludeObjectSchema as CollegeIncludeObjectSchema } from './objects/CollegeInclude.schema';
import { CollegeCreateInputObjectSchema as CollegeCreateInputObjectSchema } from './objects/CollegeCreateInput.schema';
import { CollegeUncheckedCreateInputObjectSchema as CollegeUncheckedCreateInputObjectSchema } from './objects/CollegeUncheckedCreateInput.schema';

export const CollegeCreateOneSchema: z.ZodType<Prisma.CollegeCreateArgs> = z.object({ select: CollegeSelectObjectSchema.optional(), include: CollegeIncludeObjectSchema.optional(), data: z.union([CollegeCreateInputObjectSchema, CollegeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.CollegeCreateArgs>;

export const CollegeCreateOneZodSchema = z.object({ select: CollegeSelectObjectSchema.optional(), include: CollegeIncludeObjectSchema.optional(), data: z.union([CollegeCreateInputObjectSchema, CollegeUncheckedCreateInputObjectSchema]) }).strict();