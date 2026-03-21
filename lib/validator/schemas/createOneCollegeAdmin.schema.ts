import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CollegeAdminSelectObjectSchema as CollegeAdminSelectObjectSchema } from './objects/CollegeAdminSelect.schema';
import { CollegeAdminIncludeObjectSchema as CollegeAdminIncludeObjectSchema } from './objects/CollegeAdminInclude.schema';
import { CollegeAdminCreateInputObjectSchema as CollegeAdminCreateInputObjectSchema } from './objects/CollegeAdminCreateInput.schema';
import { CollegeAdminUncheckedCreateInputObjectSchema as CollegeAdminUncheckedCreateInputObjectSchema } from './objects/CollegeAdminUncheckedCreateInput.schema';

export const CollegeAdminCreateOneSchema: z.ZodType<Prisma.CollegeAdminCreateArgs> = z.object({ select: CollegeAdminSelectObjectSchema.optional(), include: CollegeAdminIncludeObjectSchema.optional(), data: z.union([CollegeAdminCreateInputObjectSchema, CollegeAdminUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.CollegeAdminCreateArgs>;

export const CollegeAdminCreateOneZodSchema = z.object({ select: CollegeAdminSelectObjectSchema.optional(), include: CollegeAdminIncludeObjectSchema.optional(), data: z.union([CollegeAdminCreateInputObjectSchema, CollegeAdminUncheckedCreateInputObjectSchema]) }).strict();