import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RegistrationsSelectObjectSchema as RegistrationsSelectObjectSchema } from './objects/RegistrationsSelect.schema';
import { RegistrationsCreateManyInputObjectSchema as RegistrationsCreateManyInputObjectSchema } from './objects/RegistrationsCreateManyInput.schema';

export const RegistrationsCreateManyAndReturnSchema: z.ZodType<Prisma.RegistrationsCreateManyAndReturnArgs> = z.object({ select: RegistrationsSelectObjectSchema.optional(), data: z.union([ RegistrationsCreateManyInputObjectSchema, z.array(RegistrationsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.RegistrationsCreateManyAndReturnArgs>;

export const RegistrationsCreateManyAndReturnZodSchema = z.object({ select: RegistrationsSelectObjectSchema.optional(), data: z.union([ RegistrationsCreateManyInputObjectSchema, z.array(RegistrationsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();