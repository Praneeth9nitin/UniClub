import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RegistrationsSelectObjectSchema as RegistrationsSelectObjectSchema } from './objects/RegistrationsSelect.schema';
import { RegistrationsIncludeObjectSchema as RegistrationsIncludeObjectSchema } from './objects/RegistrationsInclude.schema';
import { RegistrationsWhereUniqueInputObjectSchema as RegistrationsWhereUniqueInputObjectSchema } from './objects/RegistrationsWhereUniqueInput.schema';

export const RegistrationsFindUniqueSchema: z.ZodType<Prisma.RegistrationsFindUniqueArgs> = z.object({ select: RegistrationsSelectObjectSchema.optional(), include: RegistrationsIncludeObjectSchema.optional(), where: RegistrationsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RegistrationsFindUniqueArgs>;

export const RegistrationsFindUniqueZodSchema = z.object({ select: RegistrationsSelectObjectSchema.optional(), include: RegistrationsIncludeObjectSchema.optional(), where: RegistrationsWhereUniqueInputObjectSchema }).strict();