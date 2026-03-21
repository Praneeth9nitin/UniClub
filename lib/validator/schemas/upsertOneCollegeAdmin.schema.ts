import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CollegeAdminSelectObjectSchema as CollegeAdminSelectObjectSchema } from './objects/CollegeAdminSelect.schema';
import { CollegeAdminIncludeObjectSchema as CollegeAdminIncludeObjectSchema } from './objects/CollegeAdminInclude.schema';
import { CollegeAdminWhereUniqueInputObjectSchema as CollegeAdminWhereUniqueInputObjectSchema } from './objects/CollegeAdminWhereUniqueInput.schema';
import { CollegeAdminCreateInputObjectSchema as CollegeAdminCreateInputObjectSchema } from './objects/CollegeAdminCreateInput.schema';
import { CollegeAdminUncheckedCreateInputObjectSchema as CollegeAdminUncheckedCreateInputObjectSchema } from './objects/CollegeAdminUncheckedCreateInput.schema';
import { CollegeAdminUpdateInputObjectSchema as CollegeAdminUpdateInputObjectSchema } from './objects/CollegeAdminUpdateInput.schema';
import { CollegeAdminUncheckedUpdateInputObjectSchema as CollegeAdminUncheckedUpdateInputObjectSchema } from './objects/CollegeAdminUncheckedUpdateInput.schema';

export const CollegeAdminUpsertOneSchema: z.ZodType<Prisma.CollegeAdminUpsertArgs> = z.object({ select: CollegeAdminSelectObjectSchema.optional(), include: CollegeAdminIncludeObjectSchema.optional(), where: CollegeAdminWhereUniqueInputObjectSchema, create: z.union([ CollegeAdminCreateInputObjectSchema, CollegeAdminUncheckedCreateInputObjectSchema ]), update: z.union([ CollegeAdminUpdateInputObjectSchema, CollegeAdminUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.CollegeAdminUpsertArgs>;

export const CollegeAdminUpsertOneZodSchema = z.object({ select: CollegeAdminSelectObjectSchema.optional(), include: CollegeAdminIncludeObjectSchema.optional(), where: CollegeAdminWhereUniqueInputObjectSchema, create: z.union([ CollegeAdminCreateInputObjectSchema, CollegeAdminUncheckedCreateInputObjectSchema ]), update: z.union([ CollegeAdminUpdateInputObjectSchema, CollegeAdminUncheckedUpdateInputObjectSchema ]) }).strict();