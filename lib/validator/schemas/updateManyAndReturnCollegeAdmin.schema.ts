import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CollegeAdminSelectObjectSchema as CollegeAdminSelectObjectSchema } from './objects/CollegeAdminSelect.schema';
import { CollegeAdminUpdateManyMutationInputObjectSchema as CollegeAdminUpdateManyMutationInputObjectSchema } from './objects/CollegeAdminUpdateManyMutationInput.schema';
import { CollegeAdminWhereInputObjectSchema as CollegeAdminWhereInputObjectSchema } from './objects/CollegeAdminWhereInput.schema';

export const CollegeAdminUpdateManyAndReturnSchema: z.ZodType<Prisma.CollegeAdminUpdateManyAndReturnArgs> = z.object({ select: CollegeAdminSelectObjectSchema.optional(), data: CollegeAdminUpdateManyMutationInputObjectSchema, where: CollegeAdminWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CollegeAdminUpdateManyAndReturnArgs>;

export const CollegeAdminUpdateManyAndReturnZodSchema = z.object({ select: CollegeAdminSelectObjectSchema.optional(), data: CollegeAdminUpdateManyMutationInputObjectSchema, where: CollegeAdminWhereInputObjectSchema.optional() }).strict();