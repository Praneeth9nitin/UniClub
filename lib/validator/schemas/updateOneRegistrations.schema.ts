import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RegistrationsSelectObjectSchema as RegistrationsSelectObjectSchema } from './objects/RegistrationsSelect.schema';
import { RegistrationsIncludeObjectSchema as RegistrationsIncludeObjectSchema } from './objects/RegistrationsInclude.schema';
import { RegistrationsUpdateInputObjectSchema as RegistrationsUpdateInputObjectSchema } from './objects/RegistrationsUpdateInput.schema';
import { RegistrationsUncheckedUpdateInputObjectSchema as RegistrationsUncheckedUpdateInputObjectSchema } from './objects/RegistrationsUncheckedUpdateInput.schema';
import { RegistrationsWhereUniqueInputObjectSchema as RegistrationsWhereUniqueInputObjectSchema } from './objects/RegistrationsWhereUniqueInput.schema';

export const RegistrationsUpdateOneSchema: z.ZodType<Prisma.RegistrationsUpdateArgs> = z.object({ select: RegistrationsSelectObjectSchema.optional(), include: RegistrationsIncludeObjectSchema.optional(), data: z.union([RegistrationsUpdateInputObjectSchema, RegistrationsUncheckedUpdateInputObjectSchema]), where: RegistrationsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RegistrationsUpdateArgs>;

export const RegistrationsUpdateOneZodSchema = z.object({ select: RegistrationsSelectObjectSchema.optional(), include: RegistrationsIncludeObjectSchema.optional(), data: z.union([RegistrationsUpdateInputObjectSchema, RegistrationsUncheckedUpdateInputObjectSchema]), where: RegistrationsWhereUniqueInputObjectSchema }).strict();