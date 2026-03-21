import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CollegeSelectObjectSchema as CollegeSelectObjectSchema } from './objects/CollegeSelect.schema';
import { CollegeUpdateManyMutationInputObjectSchema as CollegeUpdateManyMutationInputObjectSchema } from './objects/CollegeUpdateManyMutationInput.schema';
import { CollegeWhereInputObjectSchema as CollegeWhereInputObjectSchema } from './objects/CollegeWhereInput.schema';

export const CollegeUpdateManyAndReturnSchema: z.ZodType<Prisma.CollegeUpdateManyAndReturnArgs> = z.object({ select: CollegeSelectObjectSchema.optional(), data: CollegeUpdateManyMutationInputObjectSchema, where: CollegeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CollegeUpdateManyAndReturnArgs>;

export const CollegeUpdateManyAndReturnZodSchema = z.object({ select: CollegeSelectObjectSchema.optional(), data: CollegeUpdateManyMutationInputObjectSchema, where: CollegeWhereInputObjectSchema.optional() }).strict();