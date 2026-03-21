import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CollegeAdminWhereInputObjectSchema as CollegeAdminWhereInputObjectSchema } from './objects/CollegeAdminWhereInput.schema';

export const CollegeAdminDeleteManySchema: z.ZodType<Prisma.CollegeAdminDeleteManyArgs> = z.object({ where: CollegeAdminWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CollegeAdminDeleteManyArgs>;

export const CollegeAdminDeleteManyZodSchema = z.object({ where: CollegeAdminWhereInputObjectSchema.optional() }).strict();