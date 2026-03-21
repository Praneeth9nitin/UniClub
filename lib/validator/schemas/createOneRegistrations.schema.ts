import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RegistrationsSelectObjectSchema as RegistrationsSelectObjectSchema } from './objects/RegistrationsSelect.schema';
import { RegistrationsIncludeObjectSchema as RegistrationsIncludeObjectSchema } from './objects/RegistrationsInclude.schema';
import { RegistrationsCreateInputObjectSchema as RegistrationsCreateInputObjectSchema } from './objects/RegistrationsCreateInput.schema';
import { RegistrationsUncheckedCreateInputObjectSchema as RegistrationsUncheckedCreateInputObjectSchema } from './objects/RegistrationsUncheckedCreateInput.schema';

export const RegistrationsCreateOneSchema: z.ZodType<Prisma.RegistrationsCreateArgs> = z.object({ select: RegistrationsSelectObjectSchema.optional(), include: RegistrationsIncludeObjectSchema.optional(), data: z.union([RegistrationsCreateInputObjectSchema, RegistrationsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.RegistrationsCreateArgs>;

export const RegistrationsCreateOneZodSchema = z.object({ select: RegistrationsSelectObjectSchema.optional(), include: RegistrationsIncludeObjectSchema.optional(), data: z.union([RegistrationsCreateInputObjectSchema, RegistrationsUncheckedCreateInputObjectSchema]) }).strict();