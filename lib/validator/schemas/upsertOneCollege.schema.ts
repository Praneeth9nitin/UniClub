import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CollegeSelectObjectSchema as CollegeSelectObjectSchema } from './objects/CollegeSelect.schema';
import { CollegeIncludeObjectSchema as CollegeIncludeObjectSchema } from './objects/CollegeInclude.schema';
import { CollegeWhereUniqueInputObjectSchema as CollegeWhereUniqueInputObjectSchema } from './objects/CollegeWhereUniqueInput.schema';
import { CollegeCreateInputObjectSchema as CollegeCreateInputObjectSchema } from './objects/CollegeCreateInput.schema';
import { CollegeUncheckedCreateInputObjectSchema as CollegeUncheckedCreateInputObjectSchema } from './objects/CollegeUncheckedCreateInput.schema';
import { CollegeUpdateInputObjectSchema as CollegeUpdateInputObjectSchema } from './objects/CollegeUpdateInput.schema';
import { CollegeUncheckedUpdateInputObjectSchema as CollegeUncheckedUpdateInputObjectSchema } from './objects/CollegeUncheckedUpdateInput.schema';

export const CollegeUpsertOneSchema: z.ZodType<Prisma.CollegeUpsertArgs> = z.object({ select: CollegeSelectObjectSchema.optional(), include: CollegeIncludeObjectSchema.optional(), where: CollegeWhereUniqueInputObjectSchema, create: z.union([ CollegeCreateInputObjectSchema, CollegeUncheckedCreateInputObjectSchema ]), update: z.union([ CollegeUpdateInputObjectSchema, CollegeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.CollegeUpsertArgs>;

export const CollegeUpsertOneZodSchema = z.object({ select: CollegeSelectObjectSchema.optional(), include: CollegeIncludeObjectSchema.optional(), where: CollegeWhereUniqueInputObjectSchema, create: z.union([ CollegeCreateInputObjectSchema, CollegeUncheckedCreateInputObjectSchema ]), update: z.union([ CollegeUpdateInputObjectSchema, CollegeUncheckedUpdateInputObjectSchema ]) }).strict();