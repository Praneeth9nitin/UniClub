import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RegistrationsUpdateManyMutationInputObjectSchema as RegistrationsUpdateManyMutationInputObjectSchema } from './objects/RegistrationsUpdateManyMutationInput.schema';
import { RegistrationsWhereInputObjectSchema as RegistrationsWhereInputObjectSchema } from './objects/RegistrationsWhereInput.schema';

export const RegistrationsUpdateManySchema: z.ZodType<Prisma.RegistrationsUpdateManyArgs> = z.object({ data: RegistrationsUpdateManyMutationInputObjectSchema, where: RegistrationsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RegistrationsUpdateManyArgs>;

export const RegistrationsUpdateManyZodSchema = z.object({ data: RegistrationsUpdateManyMutationInputObjectSchema, where: RegistrationsWhereInputObjectSchema.optional() }).strict();