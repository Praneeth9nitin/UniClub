import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CollegeAdminSelectObjectSchema as CollegeAdminSelectObjectSchema } from './objects/CollegeAdminSelect.schema';
import { CollegeAdminIncludeObjectSchema as CollegeAdminIncludeObjectSchema } from './objects/CollegeAdminInclude.schema';
import { CollegeAdminUpdateInputObjectSchema as CollegeAdminUpdateInputObjectSchema } from './objects/CollegeAdminUpdateInput.schema';
import { CollegeAdminUncheckedUpdateInputObjectSchema as CollegeAdminUncheckedUpdateInputObjectSchema } from './objects/CollegeAdminUncheckedUpdateInput.schema';
import { CollegeAdminWhereUniqueInputObjectSchema as CollegeAdminWhereUniqueInputObjectSchema } from './objects/CollegeAdminWhereUniqueInput.schema';

export const CollegeAdminUpdateOneSchema: z.ZodType<Prisma.CollegeAdminUpdateArgs> = z.object({ select: CollegeAdminSelectObjectSchema.optional(), include: CollegeAdminIncludeObjectSchema.optional(), data: z.union([CollegeAdminUpdateInputObjectSchema, CollegeAdminUncheckedUpdateInputObjectSchema]), where: CollegeAdminWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CollegeAdminUpdateArgs>;

export const CollegeAdminUpdateOneZodSchema = z.object({ select: CollegeAdminSelectObjectSchema.optional(), include: CollegeAdminIncludeObjectSchema.optional(), data: z.union([CollegeAdminUpdateInputObjectSchema, CollegeAdminUncheckedUpdateInputObjectSchema]), where: CollegeAdminWhereUniqueInputObjectSchema }).strict();