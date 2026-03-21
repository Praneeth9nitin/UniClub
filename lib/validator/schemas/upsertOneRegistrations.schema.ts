import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RegistrationsSelectObjectSchema as RegistrationsSelectObjectSchema } from './objects/RegistrationsSelect.schema';
import { RegistrationsIncludeObjectSchema as RegistrationsIncludeObjectSchema } from './objects/RegistrationsInclude.schema';
import { RegistrationsWhereUniqueInputObjectSchema as RegistrationsWhereUniqueInputObjectSchema } from './objects/RegistrationsWhereUniqueInput.schema';
import { RegistrationsCreateInputObjectSchema as RegistrationsCreateInputObjectSchema } from './objects/RegistrationsCreateInput.schema';
import { RegistrationsUncheckedCreateInputObjectSchema as RegistrationsUncheckedCreateInputObjectSchema } from './objects/RegistrationsUncheckedCreateInput.schema';
import { RegistrationsUpdateInputObjectSchema as RegistrationsUpdateInputObjectSchema } from './objects/RegistrationsUpdateInput.schema';
import { RegistrationsUncheckedUpdateInputObjectSchema as RegistrationsUncheckedUpdateInputObjectSchema } from './objects/RegistrationsUncheckedUpdateInput.schema';

export const RegistrationsUpsertOneSchema: z.ZodType<Prisma.RegistrationsUpsertArgs> = z.object({ select: RegistrationsSelectObjectSchema.optional(), include: RegistrationsIncludeObjectSchema.optional(), where: RegistrationsWhereUniqueInputObjectSchema, create: z.union([ RegistrationsCreateInputObjectSchema, RegistrationsUncheckedCreateInputObjectSchema ]), update: z.union([ RegistrationsUpdateInputObjectSchema, RegistrationsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.RegistrationsUpsertArgs>;

export const RegistrationsUpsertOneZodSchema = z.object({ select: RegistrationsSelectObjectSchema.optional(), include: RegistrationsIncludeObjectSchema.optional(), where: RegistrationsWhereUniqueInputObjectSchema, create: z.union([ RegistrationsCreateInputObjectSchema, RegistrationsUncheckedCreateInputObjectSchema ]), update: z.union([ RegistrationsUpdateInputObjectSchema, RegistrationsUncheckedUpdateInputObjectSchema ]) }).strict();