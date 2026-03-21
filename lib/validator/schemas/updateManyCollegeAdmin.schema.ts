import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CollegeAdminUpdateManyMutationInputObjectSchema as CollegeAdminUpdateManyMutationInputObjectSchema } from './objects/CollegeAdminUpdateManyMutationInput.schema';
import { CollegeAdminWhereInputObjectSchema as CollegeAdminWhereInputObjectSchema } from './objects/CollegeAdminWhereInput.schema';

export const CollegeAdminUpdateManySchema: z.ZodType<Prisma.CollegeAdminUpdateManyArgs> = z.object({ data: CollegeAdminUpdateManyMutationInputObjectSchema, where: CollegeAdminWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CollegeAdminUpdateManyArgs>;

export const CollegeAdminUpdateManyZodSchema = z.object({ data: CollegeAdminUpdateManyMutationInputObjectSchema, where: CollegeAdminWhereInputObjectSchema.optional() }).strict();