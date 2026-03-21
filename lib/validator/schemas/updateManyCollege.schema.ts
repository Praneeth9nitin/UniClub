import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CollegeUpdateManyMutationInputObjectSchema as CollegeUpdateManyMutationInputObjectSchema } from './objects/CollegeUpdateManyMutationInput.schema';
import { CollegeWhereInputObjectSchema as CollegeWhereInputObjectSchema } from './objects/CollegeWhereInput.schema';

export const CollegeUpdateManySchema: z.ZodType<Prisma.CollegeUpdateManyArgs> = z.object({ data: CollegeUpdateManyMutationInputObjectSchema, where: CollegeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CollegeUpdateManyArgs>;

export const CollegeUpdateManyZodSchema = z.object({ data: CollegeUpdateManyMutationInputObjectSchema, where: CollegeWhereInputObjectSchema.optional() }).strict();