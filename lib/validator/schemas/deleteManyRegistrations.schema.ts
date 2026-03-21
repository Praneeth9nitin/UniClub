import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RegistrationsWhereInputObjectSchema as RegistrationsWhereInputObjectSchema } from './objects/RegistrationsWhereInput.schema';

export const RegistrationsDeleteManySchema: z.ZodType<Prisma.RegistrationsDeleteManyArgs> = z.object({ where: RegistrationsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RegistrationsDeleteManyArgs>;

export const RegistrationsDeleteManyZodSchema = z.object({ where: RegistrationsWhereInputObjectSchema.optional() }).strict();