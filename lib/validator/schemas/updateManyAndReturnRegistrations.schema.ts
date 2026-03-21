import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RegistrationsSelectObjectSchema as RegistrationsSelectObjectSchema } from './objects/RegistrationsSelect.schema';
import { RegistrationsUpdateManyMutationInputObjectSchema as RegistrationsUpdateManyMutationInputObjectSchema } from './objects/RegistrationsUpdateManyMutationInput.schema';
import { RegistrationsWhereInputObjectSchema as RegistrationsWhereInputObjectSchema } from './objects/RegistrationsWhereInput.schema';

export const RegistrationsUpdateManyAndReturnSchema: z.ZodType<Prisma.RegistrationsUpdateManyAndReturnArgs> = z.object({ select: RegistrationsSelectObjectSchema.optional(), data: RegistrationsUpdateManyMutationInputObjectSchema, where: RegistrationsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RegistrationsUpdateManyAndReturnArgs>;

export const RegistrationsUpdateManyAndReturnZodSchema = z.object({ select: RegistrationsSelectObjectSchema.optional(), data: RegistrationsUpdateManyMutationInputObjectSchema, where: RegistrationsWhereInputObjectSchema.optional() }).strict();