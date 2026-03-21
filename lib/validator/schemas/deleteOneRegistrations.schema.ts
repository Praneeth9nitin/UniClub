import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RegistrationsSelectObjectSchema as RegistrationsSelectObjectSchema } from './objects/RegistrationsSelect.schema';
import { RegistrationsIncludeObjectSchema as RegistrationsIncludeObjectSchema } from './objects/RegistrationsInclude.schema';
import { RegistrationsWhereUniqueInputObjectSchema as RegistrationsWhereUniqueInputObjectSchema } from './objects/RegistrationsWhereUniqueInput.schema';

export const RegistrationsDeleteOneSchema: z.ZodType<Prisma.RegistrationsDeleteArgs> = z.object({ select: RegistrationsSelectObjectSchema.optional(), include: RegistrationsIncludeObjectSchema.optional(), where: RegistrationsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RegistrationsDeleteArgs>;

export const RegistrationsDeleteOneZodSchema = z.object({ select: RegistrationsSelectObjectSchema.optional(), include: RegistrationsIncludeObjectSchema.optional(), where: RegistrationsWhereUniqueInputObjectSchema }).strict();