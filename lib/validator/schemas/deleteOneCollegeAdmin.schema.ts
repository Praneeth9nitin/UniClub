import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CollegeAdminSelectObjectSchema as CollegeAdminSelectObjectSchema } from './objects/CollegeAdminSelect.schema';
import { CollegeAdminIncludeObjectSchema as CollegeAdminIncludeObjectSchema } from './objects/CollegeAdminInclude.schema';
import { CollegeAdminWhereUniqueInputObjectSchema as CollegeAdminWhereUniqueInputObjectSchema } from './objects/CollegeAdminWhereUniqueInput.schema';

export const CollegeAdminDeleteOneSchema: z.ZodType<Prisma.CollegeAdminDeleteArgs> = z.object({ select: CollegeAdminSelectObjectSchema.optional(), include: CollegeAdminIncludeObjectSchema.optional(), where: CollegeAdminWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CollegeAdminDeleteArgs>;

export const CollegeAdminDeleteOneZodSchema = z.object({ select: CollegeAdminSelectObjectSchema.optional(), include: CollegeAdminIncludeObjectSchema.optional(), where: CollegeAdminWhereUniqueInputObjectSchema }).strict();